/*
 * Copyright (c) 2019  InterDigital Communications, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package main

import (
	"errors"
	"sync"
	"time"

	log "github.com/InterDigitalInc/AdvantEDGE/go-packages/meep-logger"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/kubernetes"
	"k8s.io/client-go/rest"
)

const IP_ADDR_NONE = "n/a"
const DEFAULT_TICKER_INTERVAL_MS = 10000

type IpAddrUpdateCb func()

// IpManager - IP address manager
type IpManager struct {
	name        string
	sandboxName string
	podIpMap    map[string]string
	svcIpMap    map[string]string
	ticker      *time.Ticker
	clientset   *kubernetes.Clientset
	updateCb    IpAddrUpdateCb
	isConnected bool
	mutex       *sync.Mutex
}

// NewIpManager - Creates and initialize an IP Manager instance
func NewIpManager(name string, sandboxName string, updateCb IpAddrUpdateCb) (im *IpManager, err error) {

	// Create new IP Manager instance
	im = new(IpManager)
	im.name = name
	im.sandboxName = sandboxName
	im.updateCb = updateCb
	im.podIpMap = make(map[string]string)
	im.svcIpMap = make(map[string]string)

	log.Info("Successfully create IP Manager")
	return im, nil
}

// SetPodList - Set list of pods to monitor IP addresses for
func (im *IpManager) SetPodList(podList []string) {
	im.mutex.Lock()
	defer im.mutex.Unlock()

}

// SetSvcList - Set list of services to monitor IP addresses for
func (im *IpManager) SetSvcList(svcList []string) {
	im.mutex.Lock()
	defer im.mutex.Unlock()
}

// GetPodIp - Get Pod IP address
func (im *IpManager) GetPodIp(podName string) string {
	podIp, found := im.podIpMap[podName]
	if !found {
		podIp = IP_ADDR_NONE
	}
	return podIp
}

// GetPodIp - Get Svc IP address
func (im *IpManager) GetSvcIp(svcName string) string {
	svcIp, found := im.podIpMap[svcName]
	if !found {
		svcIp = IP_ADDR_NONE
	}
	return svcIp
}

// Start - Start monitoring IP addresses
func (im *IpManager) Start(interval int) error {
	im.mutex.Lock()
	defer im.mutex.Unlock()

	log.Debug("Starting IP Address Manager: ", im.name)

	// Make sure ticker is not already running
	if im.ticker != nil {
		return errors.New("Ticker already running")
	}

	// Set default ticker interval if none provided
	if interval == 0 {
		interval = DEFAULT_TICKER_INTERVAL_MS
	}

	// Start ticker to periodically retrieve platform information
	im.ticker = time.NewTicker(time.Duration(interval) * time.Millisecond)
	go func() {
		for range im.ticker.C {
			im.mutex.Lock()

			// Refresh IP addresses
			im.refreshIpAddresses()

			im.mutex.Unlock()
		}
	}()

	return nil
}

// Stop - Stop monitoring IP addresses
func (im *IpManager) Stop() {
	im.mutex.Lock()
	defer im.mutex.Unlock()

	if im.ticker != nil {
		im.ticker.Stop()
		im.ticker = nil
	}
}

// Stop - Stop monitoring IP addresses
func (im *IpManager) Refresh() {
	im.mutex.Lock()
	defer im.mutex.Unlock()

	im.refreshIpAddresses()
}

// refreshIpAddresses - Refresh Pod & Service IP addresses
func (im *IpManager) refreshIpAddresses() {
	var err error
	updated := false

	// Establish connection to K8s API Server if not connected
	if !im.isConnected {
		im.clientset, err = connectToAPISvr()
		if err != nil {
			log.Error("Failed to connect with k8s API Server. Error: ", err)
			return
		}
		im.isConnected = true
	}

	// Retrieve all sandbox pods from k8s api
	podList, err := im.clientset.CoreV1().Pods(im.sandboxName).List(metav1.ListOptions{})
	if err != nil {
		log.Error("Failed to retrieve pods from k8s API Server. Error: ", err)
		im.isConnected = false
		return
	}

	// Refresh Pod IPs
	for _, pod := range podList.Items {
		podName := pod.ObjectMeta.Labels["meepApp"]
		podIp := pod.Status.PodIP

		if ip, found := im.podIpMap[podName]; found && podIp != "" && podIp != ip {
			log.Debug("Setting podName: ", podName, " ip: ", podIp)
			im.podIpMap[podName] = podIp
			updated = true

			// //set the element if it has already been created by the scenario parsing
			// element := netElemMap[podName]
			// if element != nil {
			// 	element.Ip = podIp
			// 	element.NextUniqueNumber = 1
			// }
		}
	}

	// Retrieve all sandbox services from k8s api
	svcList, err := im.clientset.CoreV1().Services(im.sandboxName).List(metav1.ListOptions{})
	if err != nil {
		log.Error("Failed to retrieve services from k8s API Server. Error: ", err)
		im.isConnected = false
		return
	}

	// Refresh Svc IPs
	for _, svc := range svcList.Items {
		svcName := svc.ObjectMeta.Name
		svcIp := svc.Spec.ClusterIP

		if ip, found := im.svcIpMap[svcName]; found && svcIp != "" && svcIp != ip {
			log.Debug("Setting svcName: ", svcName, " ip: ", svcIp)
			im.svcIpMap[svcName] = svcIp
			updated = true
		}
	}

	// Invoke update callback if at least one IP address has changed
	if updated {
		go im.updateCb()
	}
}

func connectToAPISvr() (*kubernetes.Clientset, error) {
	// Create the in-cluster config
	config, err := rest.InClusterConfig()
	if err != nil {
		log.Error(err)
		return nil, err
	}
	// Create the clientset
	clientset, err := kubernetes.NewForConfig(config)
	if err != nil {
		log.Error(err)
		return nil, err
	}
	return clientset, nil
}

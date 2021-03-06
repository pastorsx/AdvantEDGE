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
 *
 * NOTICE: File content based on https://github.com/morvencao/kube-mutating-webhook-tutorial (Apache 2.0)
 */

package main

import (
	"context"
	"crypto/tls"
	"flag"
	"fmt"
	"net/http"
	"os"
	"os/signal"
	"syscall"

	log "github.com/InterDigitalInc/AdvantEDGE/go-packages/meep-logger"
)

func main() {
	var parameters WhSvrParameters

	// Initialize logging
	log.MeepJSONLogInit("meep-webhook")

	// Connect to Active DB
	err := activeDBConnect()
	if err != nil {
		log.Error("Failed to connect to Active DB: ", err.Error())
		return
	}

	// get command line parameters
	flag.IntVar(&parameters.port, "port", 443, "Webhook server port.")
	flag.StringVar(&parameters.certFile, "tlsCertFile", "/etc/webhook/certs/cert.pem", "File containing the x509 Certificate for HTTPS.")
	flag.StringVar(&parameters.keyFile, "tlsKeyFile", "/etc/webhook/certs/key.pem", "File containing the x509 private key to --tlsCertFile.")
	flag.StringVar(&parameters.sidecarCfgFile, "sidecarCfgFile", "/etc/webhook/config/sidecarconfig.yaml", "File containing the mutation configuration.")
	flag.Parse()

	// Load Sidecar config
	sidecarConfig, err := loadConfig(parameters.sidecarCfgFile)
	if err != nil {
		log.Error("Failed to load configuration: ", err.Error())
	}

	// Load & configure certificates
	pair, err := tls.LoadX509KeyPair(parameters.certFile, parameters.keyFile)
	if err != nil {
		log.Error("Failed to load key pair: ", err.Error())
		return
	}

	whsvr := &WebhookServer{
		sidecarConfig: sidecarConfig,
		server: &http.Server{
			Addr:      fmt.Sprintf(":%v", parameters.port),
			TLSConfig: &tls.Config{Certificates: []tls.Certificate{pair}},
		},
	}

	// Define http server and server handler
	mux := http.NewServeMux()
	mux.HandleFunc("/mutate", whsvr.serve)
	whsvr.server.Handler = mux

	// Start DB listener in new routine
	go activeDBListen()

	// Start webhook server in new routine
	go func() {
		if err := whsvr.server.ListenAndServeTLS("", ""); err != nil {
			log.Error("Failed to listen and serve webhook server: ", err.Error())
		}
	}()

	// Listen for OS shutdown singal
	signalChan := make(chan os.Signal, 1)
	signal.Notify(signalChan, syscall.SIGINT, syscall.SIGTERM)
	<-signalChan

	log.Info("Got OS shutdown signal, shutting down webhook server gracefully...")
	_ = whsvr.server.Shutdown(context.Background())
}

/*
 * MEEP Demo App API
 *
 * This is the MEEP Demo App API
 *
 * API version: 0.0.1
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package swagger

import (
	"net/http"
)

func RcvTrackingNotification(w http.ResponseWriter, r *http.Request) {
	localDBUpdateTrackedUes(w, r)

}

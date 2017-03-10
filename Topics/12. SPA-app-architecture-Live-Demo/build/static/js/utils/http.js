"use strict";

(function (scope) {
    scope.http = {
        sendRequest: function sendRequest(method, url, body) {
            var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: url,
                    method: method,
                    data: body,
                    headers: headers,
                    success: function success(resp) {
                        resolve(resp);
                    },
                    error: function error(err) {
                        reject(err);
                    }
                });
            });
        },
        get: function get(url) {
            var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.sendRequest("GET", url, null, headers);
        },
        post: function post(url, body) {
            var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.sendRequest("POST", url, body, headers);
        },
        postJSON: function postJSON(url, body) {
            var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            headers["content-type"] = "application/json";
            return this.post(url, JSON.stringify(body), headers);
        }
    };
})(window);
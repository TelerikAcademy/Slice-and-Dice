/* globals $ */

((scope) => {
    scope.http = {
        sendRequest(method, url, body, headers = {}) {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url,
                    method,
                    data: body,
                    headers,
                    success(resp) {
                        resolve(resp);
                    },
                    error(err) {
                        reject(err);
                    }
                });
            });
        },
        get(url, headers = {}) {
            return this.sendRequest("GET", url, null, headers);
        },
        post(url, body, headers = {}) {
            return this.sendRequest("POST", url, body, headers);
        },
        postJSON(url, body, headers = {}) {
            headers["content-type"] = "application/json";
            return this.post(url, JSON.stringify(body), headers);
        },
    };
})(window);
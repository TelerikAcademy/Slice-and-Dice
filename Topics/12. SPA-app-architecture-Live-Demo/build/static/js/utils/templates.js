"use strict";

var http = window.http;
var handlebars = window.handlebars || window.Handlebars;

(function (scope) {
    scope.templates = {
        getByUrl: function getByUrl(url) {
            return http.get(url).then(function (templateHtml) {
                var templateFunc = handlebars.compile(templateHtml);
                return templateFunc;
            });
        },
        get: function get(name) {
            var url = "/static/templates/" + name + ".html";
            return this.getByUrl(url);
        },
        getModal: function getModal(type) {
            var url = "/static/modals/" + type + ".html";
            return this.getByUrl(url);
        },
        getPage: function getPage(name) {
            var url = "/static/pages/" + name + "/" + name + ".html";
            return this.getByUrl(url);
        }
    };
})(window);
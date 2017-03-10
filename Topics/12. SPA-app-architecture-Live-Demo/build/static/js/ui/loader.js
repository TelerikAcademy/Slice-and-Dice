"use strict";

var templates = window.templates;

(function (scope) {
    var loaderId = "loader";
    var loaderSelector = "#" + loaderId;

    scope.loader = {
        init: function init() {
            return templates.get("loader").then(function (templateFunc) {
                var html = templateFunc({
                    id: loaderId
                });

                $(loaderSelector).remove();
                $(document.body).append(html);
            });
        },
        show: function show() {
            $(loaderSelector).removeClass("hidden");
            return this;
        },
        hide: function hide() {
            $(loaderSelector).addClass("hidden");
            return this;
        }
    };
})(window);
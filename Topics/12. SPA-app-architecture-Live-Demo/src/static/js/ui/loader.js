/* globals $ */

const templates = window.templates;

((scope) => {
    const loaderId = "loader";
    const loaderSelector = `#${loaderId}`;

    scope.loader = {
        init() {
            return templates.get("loader")
                .then((templateFunc) => {
                    const html = templateFunc({
                        id: loaderId,
                    });

                    $(loaderSelector).remove();
                    $(document.body).append(html);
                });
        },
        show() {
            $(loaderSelector).removeClass("hidden");
            return this;
        },
        hide() {
            $(loaderSelector).addClass("hidden");
            return this;
        },
    };
})(window);
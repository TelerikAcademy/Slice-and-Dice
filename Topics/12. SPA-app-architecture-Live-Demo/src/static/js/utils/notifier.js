/* globals toastr */
((scope) => {
    scope.notifier = {
        success(msg) {
            toastr.success(msg);
        },
        error(msg) {
            toastr.error(msg);
        }
    };
})(window);
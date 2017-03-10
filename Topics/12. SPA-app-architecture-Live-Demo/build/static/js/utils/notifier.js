"use strict";

(function (scope) {
    scope.notifier = {
        success: function success(msg) {
            toastr.success(msg);
        },
        error: function error(msg) {
            toastr.error(msg);
        }
    };
})(window);
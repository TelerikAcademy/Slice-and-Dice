"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (scope) {
    var templates = window.templates;

    var Modal = function () {
        function Modal(type) {
            var _this = this;

            var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            _classCallCheck(this, Modal);

            this.type = type;
            this.id = "modal-" + type + "-id";
            templates.getModal(this.type).then(function (templateFunc) {
                _this.modalHtml = "\n<div id=\"" + _this.id + "\">\n    " + templateFunc(model) + "\n</div>\n                    ";
            });
        }

        _createClass(Modal, [{
            key: "show",
            value: function show() {
                $("#" + this.id).remove();
                $(document.body).append(this.modalHtml);
                $("#" + this.id + " .modal").modal();
                return Promise.resolve(this);
            }
        }, {
            key: "hide",
            value: function hide() {
                $("#" + this.id + " .modal").modal("hide");
                // $(`#${this.id}`).remove();
                return Promise.resolve(this);
            }
        }]);

        return Modal;
    }();

    scope.modals = {
        getAddBook: function getAddBook(model) {
            return new Modal("add-book", model);
        }
    };
})(window);
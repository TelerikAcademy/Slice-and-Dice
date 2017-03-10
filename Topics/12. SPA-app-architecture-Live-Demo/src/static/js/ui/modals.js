/* globals $ */

((scope) => {
    const templates = window.templates;

    class Modal {
        constructor(type, model = {}) {
            this.type = type;
            this.id = "modal-" + type + "-id";
            templates.getModal(this.type)
                .then((templateFunc) => {
                    this.modalHtml = `
<div id="${this.id}">
    ${templateFunc(model)}
</div>
                    `;
                });
        }

        show() {
            $(`#${this.id}`).remove();
            $(document.body).append(this.modalHtml);
            $(`#${this.id} .modal`).modal();
            return Promise.resolve(this);
        }

        hide() {
            $(`#${this.id} .modal`).modal("hide");
            // $(`#${this.id}`).remove();
            return Promise.resolve(this);
        }
    }

    scope.modals = {
        getAddBook(model) {
            return new Modal("add-book", model);
        }
    };
})(window);
/* globals $ */

const notifier = window.notifier;
const loader = window.loader;
const modals = window.modals;
const http = window.http;
const templates = window.templates;

((scope) => {
    const $pagePlaceholder = $("#page-placeholder");

    const genres = ["action", "fantasy", "sci-fi", "horror", "romance", "chick lit", "comedy"];
    const modalAddBook = modals.getAddBook({
        model: genres
    });

    const helperFuncs = {
        createBook(bookToAdd) {
            const url = window.baseUrl + "books";

            loader.show();

            $("#loader .loader-title").html("Creating Book");
            Promise.all([http.postJSON(url, bookToAdd), templates.get("book-item")])
                .then(([book, templateFunc]) => {
                    let html = templateFunc({
                        model: book
                    });

                    $(".list-books").append(html);

                    loader.hide();
                    modalAddBook.hide();
                })
                .catch((err) => {
                    loader.hide();
                    notifier.error(`${bookToAdd.title} not created! ${err}`);
                    console.log(JSON.stringify(err)); // eslint-disable-line no-console
                });
        },
        addFormEvents() {
            const $form = $("#form-add-book");
            $form.on("submit", function() {
                let genres = [];
                $("input[name=genres]:checked")
                    .each((index, genreEl) => {
                        genres.push($(genreEl).val());
                    });

                const book = {
                    title: $("#tb-title").val(),
                    description: $("#tb-description").val(),
                    genres
                };

                helperFuncs.createBook(book);

                return false;
            });
        }
    };

    const initial = () => {
        const url = window.baseUrl + "books";
        Promise.all([http.get(url), templates.getPage("home")])
            .then(([resp, templateFunc]) => {
                const books = resp.result;

                let html = templateFunc({
                    model: {
                        books
                    }
                });

                $pagePlaceholder.html(html);

                $("#btn-show-add-book-modal").on("click", () => {
                    modalAddBook.show()
                        .then(() => {
                            helperFuncs.addFormEvents();
                        });
                });


            });
    };

    scope.home = {
        initial
    };
})(window.controllers = window.controllers || {});
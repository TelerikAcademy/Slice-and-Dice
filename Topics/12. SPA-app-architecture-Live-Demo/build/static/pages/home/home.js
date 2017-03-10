"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

(function (scope) {
    var notifier = window.notifier;
    var loader = window.loader;
    var $pagePlaceholder = $("#page-placeholder");

    var genres = ["action", "fantasy", "sci-fi", "horror", "romance", "chick lit", "comedy"];

    var modalAddBook = modals.getAddBook({
        model: genres
    });

    var createBook = function createBook(bookToAdd) {
        var url = window.baseUrl + "books";

        loader.show();

        $("#loader .loader-title").html("Creating Book");
        Promise.all([http.postJSON(url, bookToAdd), templates.get("book-item")]).then(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                book = _ref2[0],
                templateFunc = _ref2[1];

            var html = templateFunc({
                model: book
            });

            $(".list-books").append(html);

            loader.hide();
            modalAddBook.hide();
        }).catch(function (err) {
            loader.hide();
            notifier.error(bookToAdd.title + " not created! " + err);
            console.log(JSON.stringify(err));
        });
    };

    var initial = function initial() {
        var url = window.baseUrl + "books";
        Promise.all([http.get(url), templates.getPage("home")]).then(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                resp = _ref4[0],
                templateFunc = _ref4[1];

            var books = resp.result;

            var html = templateFunc({
                model: {
                    books: books
                }
            });

            // routing
            $pagePlaceholder.html(html);

            $("#btn-show-add-book-modal").on("click", function () {
                modalAddBook.show().then(function () {
                    addFormEvents();
                });
            });

            var addFormEvents = function addFormEvents() {
                var $form = $("#form-add-book");
                $form.on("submit", function (ev) {
                    var genres = [];
                    $("input[name=genres]:checked").each(function (index, genreEl) {
                        genres.push($(genreEl).val());
                    });

                    var book = {
                        title: $("#tb-title").val(),
                        description: $("#tb-description").val(),
                        genres: genres
                    };

                    createBook(book);

                    return false;
                });
            };
        });
    };

    scope.home = {
        initial: initial
    };
})(window.controllers = window.controllers || {});
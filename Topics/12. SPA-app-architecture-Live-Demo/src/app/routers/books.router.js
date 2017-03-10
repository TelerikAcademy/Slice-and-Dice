// const passport = require("passport");

// const authFunc = require("../auth/auth-func");

const Router = require("express").Router;

const validator = require("../validators/book.validator");

const controllerFactory = {
    create(data) {
        return {
            getAll(req, res) {
                return data.books.getAll()
                    .then((books) => {
                        return res.send({
                            result: books
                        });
                    });
            },
            getById(req, res) {
                return data.books.getById(req.params.id)
                    .then((book) => {
                        return res.send({
                            result: book
                        });
                    });
            },
            create(req, res) {
                let book = req.body;
                if (!validator.isBookValid(book)) {
                    return Promise.resolve()
                        .then(() => {
                            return res.status(400)
                                .send({
                                    error: "Invalid book"
                                });
                        });
                }

                return data.books.add(book)
                    .then((createdBook) => {
                        setTimeout(() => {
                            return res.status(201)
                                .send(createdBook);
                        }, 1500);
                    });
            }
        };
    }
};

module.exports = (data) => {
    const router = new Router();
    const controller = controllerFactory.create(data);

    router.get("/",
            // authFunc(),
            controller.getAll)
        .get("/:id",
            // authFunc(),
            controller.getById)
        .post("/",
            // authFunc(),
            controller.create);

    return router;
};
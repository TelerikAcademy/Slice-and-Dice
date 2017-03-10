const Router = require("express").Router;

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
            getByUsername(req, res) {
                return data.books.getById(req.params.id)
                    .then((book) => {
                        return res.send({
                            result: book
                        });
                    });
            },
            signUp(req, res) {
                let user = req.body;
                return data.users.findByUsername(user.username)
                    .then((dbUser) => {
                        if (dbUser) {
                            return res.status(404)
                                .send({
                                    error: "Username is already taken"
                                });
                        }
                        return data.users.add(user);
                    })
                    .then(() => {
                        return res.status(201)
                            .send({
                                result: "User created!"
                            });
                    });
            },
            signIn(req, res) {
                const user = req.body;
                return data.users.findByUsername(user.username)
                    .then((dbUser) => {
                        if (!dbUser) {
                            return res.status(401)
                                .send({
                                    error: "Unauthorized"
                                });
                        }

                        if (user.password !== dbUser.password) {
                            return res.status(401)
                                .send({
                                    error: "Invalid username and/or password"
                                });
                        }

                        return res.send({
                            username: dbUser.username,
                            token: dbUser.id
                        });
                    });
            },
        };
    },
};


module.exports = (data) => {
    const router = new Router();
    const controller = controllerFactory.create(data);

    router.get("/", controller.getAll)
        .get("/:username", controller.getByUsername)
        .post("/", controller.signUp)
        .put("/", controller.signIn);

    return router;
};
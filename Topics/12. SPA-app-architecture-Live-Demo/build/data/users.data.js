module.exports = (db) => {
    return {
        getAll() {
            return Promise.resolve()
                .then(() => {
                    return db.get("books")
                        .value();
                });
        },
        getById(id) {
            return Promise.resolve()
                .then(() => {
                    const book = db.get("users")
                        .getById(id).value();
                    return book;
                });
        },

        findByToken(token) {
            return this.getById(token);
        },

        findByUsername(username) {
            return Promise.resolve()
                .then(() => {
                    const user = db.get("users")
                        .find({
                            username
                        })
                        .value();
                    return user;
                });
        },

        add(user) {
            return Promise.resolve()
                .then(() => {
                    const id = db.get("users").insert(user)
                        .write()
                        .id;
                    return db.get("users")
                        .getById(id);
                });
        },
    };
};
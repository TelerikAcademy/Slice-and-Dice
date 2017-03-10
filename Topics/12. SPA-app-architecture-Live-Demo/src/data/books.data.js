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
                    const book = db.get("books")
                        .getById(id).value();
                    return book;
                });
        },
        add(book) {
            return Promise.resolve()
                .then(() => {
                    const id = db.get("books").insert(book)
                        .write()
                        .id;
                    return db.get("books")
                        .getById(id);
                });
        },
    };
};
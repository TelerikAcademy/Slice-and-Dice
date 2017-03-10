/* globals __dirname */

const fs = require("fs");
const path = require("path");

const low = require("lowdb");

const db = low(path.join(__dirname, "../../db/db.json"));

db._.mixin(require("lodash-id"));

db.defaults({
    books: [],
    users: []
}).write();

let data = {};

fs.readdirSync(__dirname)
    .filter((file) => file.includes(".data"))
    .forEach((file) => {
        const name = file.substr(0, file.indexOf("."));
        data[name] = require(path.join(__dirname, file))(db);
    });

module.exports = data;
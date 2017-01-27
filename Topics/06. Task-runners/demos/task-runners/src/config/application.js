const path = require("path");

const express = require("express"),
    bodyParser = require("body-parser");

module.exports = {
    create() {
        let app = express();

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.use("/static", express.static(path.join(__dirname, "../client")));
        app.use("/libs", express.static(path.join(__dirname, "../../node_modules")));

        return app;
    }
};
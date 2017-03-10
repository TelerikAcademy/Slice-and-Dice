/* globals __dirname */

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const morgan = require("morgan");

const app = require("./app/application").getApp();

const { port } = require("./app/config");

const data = require("./data");

app.set("view engine", "pug");
app.set("views", "build/views");

app.use(morgan("combined"));

app.use("/libs", express.static(path.join(__dirname, "../node_modules")));
app.use("/static", express.static(path.join(__dirname, "static")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/auth")(app, data);

app.get("/api/ping", (req, res) => res.send(true));

app.get("/", (req, res) => res.render("index"));

app.use("/api/books", require("./app/routers/books.router")(data));
app.use("/api/auth", require("./app/routers/auth.router")(data));

const server = app.listen(port, () => {
    const address = server.address().address;
    console.log(`App started at ${address}:${port}`); // eslint-disable-line no-console
});
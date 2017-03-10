const express = require("express");

const getApp = () => {
    const app = express();
    return app;
};

module.exports = { getApp };
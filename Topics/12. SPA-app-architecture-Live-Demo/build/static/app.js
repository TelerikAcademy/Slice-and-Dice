"use strict";

$(function () {
    var loader = window.loader;

    window.baseUrl = "/api/";
    var root = null;
    var useHash = false;

    loader.init();

    var router = new Navigo(root, useHash);

    // routing
    router.on(controllers.home.initial).resolve();
});
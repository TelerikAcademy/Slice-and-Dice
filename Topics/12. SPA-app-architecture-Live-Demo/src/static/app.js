/* globals $ Navigo controllers */

$(() => {
    const loader = window.loader;

    window.baseUrl = "/api/";
    const root = null;
    const useHash = false;

    loader.init();

    let router = new Navigo(root, useHash);

    // routing
    router
        .on(controllers.home.initial)
        .resolve();
});
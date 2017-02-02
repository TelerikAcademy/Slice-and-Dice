$(document).ready(function () {
    var MOBILE_WIDTH = 991;
    kendo.culture("en-GB");

    function setMenu() {
        var windowWidth = $(window).width();
        $('#Menu').kendoMenu().data('kendoMenu').destroy();

        if (windowWidth <= MOBILE_WIDTH) {
            $('#Menu').kendoMenu({
                openOnClick: true,
                closeOnClick: true
            });
        } else {
            $("#Menu").kendoMenu();
        }

        $("#Menu").show();
    }

    setMenu();

    $(window).resize(function() {
        setMenu();
    });

    $(".noJavascriptMenu").removeClass("noJavascriptMenu");

    var tooltipTimeout;
    $(".userPanel").on("mouseenter", ".menuIcon", function(e) {
        e.preventDefault();
        var $that = $(this);
        tooltipTimeout = setTimeout(function() { $that.children(".name").fadeIn(); }, 500);
    });

    $(".userPanel").on("mouseleave", ".menuIcon", function(e) {
        e.preventDefault();
        clearTimeout(tooltipTimeout);
        $(this).children(".name").css("display", "none");
    });

    jQuery("time.timeago").timeago();

    // Open external links in new tab
    $("#MainContainer a").each(function () {
        var a = new RegExp("/" + window.location.host + "/");
        if (!a.test(this.href) && this.href && this.href != "#") {
            $(this).click(function (event) {
                event.preventDefault();
                event.stopPropagation();
                window.open(this.href, "_blank");
            });
        }
    });
    
    $("#MainHeader").on("click", function () {
        document.location.href = "/";
    });
});



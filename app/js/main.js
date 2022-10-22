$(document).ready(function () {
    "use strict";

    $(".nav_mobile_top_btn").click(function() {
        $(this).toggleClass("active");
        $(".nav_mobile_drop").toggleClass("active");
    });

});
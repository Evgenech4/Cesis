$(function() {
    var header = $("#header"),
        introH=$("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });
});

console.log();
//rgr3t3tr4rr
$(document).ready(function(){

    $(".carousel-button-right").click(function(){
        $(".carousel-item").animate({left: "-200px"}, 400);
        setTimeout(function () {
            $(".carousel-item .carousel-block").eq(0).clone().appendTo(".carousel-item");
            $(".carousel-item .carousel-block").eq(0).remove();
            $(".carousel-item").css({"left":"0px"});
        }, 300);
    });

    $(".carousel-button-left").click(function(){
        $(".carousel-item .carousel-block").eq(-1).clone().prependTo(".carousel-item");
        $(".carousel-item").css({"left":"-200px"});
        $(".carousel-item").animate({left: "0px"}, 400);
        $(".carousel-item .carousel-block").eq(-1).remove();
    });

});
$(function(){
    var position = $("#main-wrapper").offset().top;
    $(".btn").click(function(){
        $("html,body").animate({
        scrollTop : position
    }, {
        queue : false
    });
    });

});

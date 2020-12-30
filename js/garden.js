$(document).ready(function(){

// hover functions

    $(".obj > a").hover(function(){
        if (window.matchMedia("(min-width: 800px)").matches) {
            $('#title').css("background-color", $(this).siblings('.obj-bg').css("background-color"),"filter","brightness(150)");
            $('#bg').css("transform", 'scale(1.05)');
            $(".bg").addClass("hover");
            $(this).siblings('.obj-bg').finish('fx').fadeIn(400);
            $(this).siblings('h2').finish('fx').fadeIn(400);
            $(this).siblings('h3').finish('fx').fadeIn(400);
            $(this).parent(".obj").siblings(".obj").finish('fx').fadeOut(400);
        }
        }, function(){
            if (window.matchMedia("(min-width: 800px)").matches) {
            $('#title').css("background-color", 'rgba(150, 226, 214, 0.6)');
            $('#bg').css("transform", 'scale(1)');
            $(".bg").removeClass("hover");
            $(this).siblings('.obj-bg').finish('fx').fadeOut(400);
            $(this).siblings('h2').fadeOut(400);
            $(this).siblings('h3').fadeOut(400);
            $(this).parent(".obj").siblings(".obj").fadeIn(400);
        }
    });

// video fade in/out

    $("a.obj-img").click(function(){
        $(this).parent(".obj").siblings(".obj").finish('fx').fadeOut(400);
        // $(this).finish('fx').fadeOut(400);
        $(this).parent(".obj").siblings(".obj").css("z-index", "-1");
        $(this).siblings(".video-player").fadeIn(400);
    });
    $(".video-close").click(function(){
        $(".obj").css("z-index", "2");
        $(this).parent(".video-player").fadeOut(400);
        $(".obj").fadeIn(400);
        $(this).parent(".video-player").siblings("a").fadeIn(400); 
    });

// about info fade in/out

    $("#about-trigger").click(function(){
        $('.about-container').css("display", "grid")
        $(".obj").fadeOut(200);
        $("#title").fadeOut(200);
        $("#logo").fadeOut(200);
    });
    $("#about-close").click(function(){
        $('.about-container').fadeOut(400);
        $(".obj").fadeIn(400);
        $("#title").fadeIn(400);
        $("#logo").fadeIn(400);
    });

});
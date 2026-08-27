$(document).ready(function() {
    var myArray = [0, 1, 2, 3, 4];
    var rand = Math.floor(Math.random() * myArray.length);
    var rValue = myArray[rand];

    switch (rValue) {
        case 0:
            $(".loading_box img").attr("src", "https://image.mycard520.com/maplestorym/images/loading.gif");
            break;
        case 1:
            $(".loading_box img").attr("src", "https://image.mycard520.com/maplestorym/images/loading02.gif");
            break;
        case 2:
            $(".loading_box img").attr("src", "https://image.mycard520.com/maplestorym/images/loading03.gif");
            break;

        case 3:
            $(".loading_box img").attr("src", "https://image.mycard520.com/maplestorym/images/loading04.gif");
            break;
        case 4:
            $(".loading_box img").attr("src", "https://image.mycard520.com/maplestorym/images/loading05.gif");
            break;
    }

    $("#account_input_btn").on('click', function(){
        $(".mall").addClass("show");
        $(".form_account").hide();
    });

    $('.burger_menu').on('click', function(e) {
        e.preventDefault();
        $('.menu_box').toggleClass('active');
    });
    $('.webview').on('click', function(e) {
        e.preventDefault();
        $('.menu_box').removeClass('active');
    });

    
    var curXPos = 0,
        curDown = false;

    window.addEventListener('mousemove', function(e) {
        if (curDown === true) {
            var sc = document.getElementById("scrolly");
            sc.scrollLeft = sc.scrollLeft + (curXPos - e.pageX);
            curXPos = e.pageX;
        }
    });

    window.addEventListener('mousedown', function(e) {
        curDown = true;
        curXPos = e.pageX;
    });

    window.addEventListener('mouseup', function(e) {
        curDown = false;
    });


    $('.inquire .text,.inquire .icon').click(function() {
        $('.overlay').addClass('overlay_show');
        $('.pup_uid_msg').addClass('pup_show');
        $('body').addClass('overflow_hidden');
    });

    $('.btn_close,.overlay').click(function() {
        $('.overlay').removeClass('overlay_show');
        $('.pup_uid_msg').removeClass('pup_show');
        $('.pup_product_msg').removeClass('pup_show');
        $('.pup_system_msg').removeClass('pup_show');
        $('body').removeClass('overflow_hidden');
    });

    var footer = $('footer');

    /*
    $(window).scroll(function() {

        var bodyh = document.body.clientHeight;
        var windowh = window.innerHeight;
        last = bodyh - 80 - windowh;

        if ($(window).scrollTop() == 0) {
            footer.css({ opacity: '0' });
            footer.removeClass('add_zindex');
        }
        if ($(window).scrollTop() >= last) {
            footer.css({ opacity: '1' });
            $('.buy_btn').css({ bottom: '250' + 'px' });
            footer.addClass('add_zindex');
        } else {
            $('.buy_btn').css({ bottom: '20' + 'px' });
            footer.css({ opacity: '0' });
            footer.removeClass('add_zindex');

        }
    });
    

    
    $(window).on('wheel', function(event) {
        if (event.originalEvent.deltaY < 0) {
            footer.css({ opacity: '0' });
        }
    });
    */
    

    parallaxInstance = new Parallax(document.getElementById("top_banner_01"), {});
    parallaxInstance = new Parallax(document.getElementById("top_banner_02"), {});
    parallaxInstance = new Parallax(document.getElementById("top_banner_03"), {});
    parallaxInstance = new Parallax(document.getElementById("top_banner_04"), {});
    parallaxInstance = new Parallax(document.getElementById("top_banner_05"), {});
    parallaxInstance = new Parallax(document.getElementById("top_banner_06"), {});
    parallaxInstance = new Parallax(document.getElementById("top_banner_07"), {});
    parallaxInstance = new Parallax(document.getElementById("top_banner_08"), {});
    parallaxInstance = new Parallax(document.getElementById("top_banner_09"), {});

});
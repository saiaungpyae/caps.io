// document on load
$(document).ready(function () {
    $('select').material_select();
    $('.parallax').parallax();
    $('.modal-trigger').leanModal();
    $(".mdi-refresh").click(function () {
        $(this).animateRotate(360, 1000, "linear", function () {});
    });
});

document.getElementById('lockCheck').addEventListener('click', function () {
    document.getElementById('lock').classList.toggle('active');
});

// refresh rotate

$.fn.animateRotate = function (angle, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function (i, e) {
        args.complete = $.proxy(args.complete, e);
        args.step = function (now) {
            $.style(e, 'transform', 'rotate(' + now + 'deg)');
            if (step) return step.apply(e, arguments);
        };

        $({deg: 0}).animate({deg: angle}, args);
    });
};

// hide header on scroll
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (e) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 300);

function hasScrolled() {
    var st = $(this).scrollTop();

    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    if(st > lastScrollTop && st > navbarHeight) {
        $('header').removeClass('nav-filter-down').addClass('nav-filter-up');
    } else {
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-filter-up').addClass('nav-filter-down');
        }
    }

    lastScrollTop = st;
}

// smooth scroll
$('a[href*="#"]:not(a[href="#"]):not(a[href*="#!"])').click(function(e) {
    if (this.hash != ""){
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500);
    }
});

// hamburger icon

document.querySelector("#nav-toggle").addEventListener("click", function () {
    this.classList.toggle("active");
});


// random image

function randomImg() {
    var randomNum = Math.floor(Math.random() * 9) + 1;
    var imgName = "img_" + randomNum + ".png";
    var path ="lm_img/";
    return path + imgName;
}

// video and microphone

$('.mdi-microphone-off, .mdi-video-off').css('visibility', 'hidden');

$('.mdi-video').click(function () {
    $(this).css('visibility', 'hidden');
    $('.mdi-video-off').css('visibility', 'visible');
});

$('.mdi-video-off').click(function () {
    $(this).css('visibility', 'hidden');
    $('.mdi-video').css('visibility', 'visible');
});

$('.mdi-microphone').click(function () {
    $(this).css('visibility', 'hidden');
    $('.mdi-microphone-off').css('visibility', 'visible');
});

$('.mdi-microphone-off').click(function () {
    $(this).css('visibility', 'hidden');
    $('.mdi-microphone').css('visibility', 'visible');
});
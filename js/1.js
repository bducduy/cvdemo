$(document).ready(function() {
	new WOW().init();

$(window).scroll(function (event) {

var st = $(this).scrollTop();
var ss = $(".about").offset().top;

    if (st < ss) {
        $('.dautrang img').animate({top: st/3}, 0);
    }
    else {
        $('.dautrang img').animate({top: ss/3}, 0);
    }

    if (st > 0) {
        $(".dautrang nav").addClass("bg-dark");
    }
    else {
        $(".dautrang nav").removeClass("bg-dark");
    }


/*code for skillbar*/
var ks = $(".skillset").offset().top;
    ks-=100;
    if (st > ks) {
      $('.skill-per').each(function(){
        var $this = $(this);
        var per = $this.attr('per');
        $this.css("width",per+'%');
      });
    }

/*code for latestprojects section*/

var sq = $(".quotes").offset().top;
var sl = $('.latestprojects').offset().top;
    sq-=900;
    if ((st > sq) && (st<sl)){
        $(".quotes img").animate({top:(st-sq)/3},0)
    }
    else if (st<=sq) {
        $(".quotes img").animate({top:(sl-sq-900)/2},0)
    }
    else {
        $(".quotes img").animate({top:-(sl-sq-900)/3},0)
    }




/*code for user click on menu items */
var x=0,
    y=0;
if(st < $('.about').offset().top) {
    $('.dautrang li').children().removeClass('chon');
    $('.dautrang li:nth-child(1) a').addClass('chon');
}
else if((st >= $('.about').offset().top) && (st < $('.ioffer').offset().top)) {
    $('.dautrang li').children().removeClass('chon');
    $('.dautrang li:nth-child(2) a').addClass('chon');
}
else if((st >= $('.ioffer').offset().top) && (st < $('.quotes').offset().top)) {
    $('.dautrang li').children().removeClass('chon');
    $('.dautrang li:nth-child(3) a').addClass('chon');
}
else if((st >= $('.quotes').offset().top) && (st < $('.client').offset().top)) {
    $('.dautrang li').children().removeClass('chon');
    $('.dautrang li:nth-child(4) a').addClass('chon');
}
else if((st >= $('.client').offset().top) && (st < ($('.contact').offset().top)-1)) {
    $('.dautrang li').children().removeClass('chon');
    $('.dautrang li:nth-child(5) a').addClass('chon');
}
else {
    $('.dautrang li').children().removeClass('chon');
    $('.dautrang li:nth-child(6) a').addClass('chon');
}


/*code for roll-up*/
if (st > 200) {
    $('.roll-up').addClass('nuthienra');
}
else {
    $('.roll-up').removeClass('nuthienra');
}

/*counter numbers*/

if (st > ($('.counter').offset().top)-200) {

    $('.counter .number').each(function () {
        var per = $(this).attr('per');

        $(this).prop('Counter',0).animate({Counter: per},
            {duration: 4000,easing: 'swing',step: function (now) 
            {$(this).text(Math.ceil(now));
            }
                });
        });
}

}); 
/*******End rolling*********/


/*code for roll-up*/
$('.roll-up').on('click', function(event) {
    event.preventDefault();
    $('body').animate({scrollTop:0},1000);
    return false;
});


/*code for rolling when user click on menubar*/
$('.dautrang li:nth-child(1) a').on('click', function(event) {
    event.preventDefault();
    $('body').animate({scrollTop:0},1000);
    return false;
});

$('.dautrang li:nth-child(2) a').on('click', function(event) {
    event.preventDefault();
    $('body').animate({scrollTop: $('.about').offset().top},1000);
    return false;
});

$('.dautrang li:nth-child(3) a').on('click', function(event) {
    event.preventDefault();
    $('body').animate({scrollTop: $('.ioffer').offset().top},1000);
    return false;
});

$('.dautrang li:nth-child(4) a').on('click', function(event) {
    event.preventDefault();
    $('body').animate({scrollTop: $('.quotes').offset().top},1000);
    return false;
});

$('.dautrang li:nth-child(5) a').on('click', function(event) {
    event.preventDefault();
    $('body').animate({scrollTop: $('.client').offset().top},1000);
    return false;
});

$('.dautrang li:nth-child(6) a').on('click', function(event) {
    event.preventDefault();
    $('body').animate({scrollTop: $('.contact').offset().top},1000);
    return false;
});

$('.muiten i').on('click', function(event) {
    event.preventDefault();
    $('body').animate({scrollTop: $('.about').offset().top},600);
    return false;
});

/*.theanh menu on click*/

$('.thanhmenu ul li:nth-child(1) a').on('click', function(event) {
    event.preventDefault();
    $('.thanhmenu ul li').children().removeClass('dangchon');
    $(this).addClass('dangchon');
    return false;
});
$('.thanhmenu ul li:nth-child(2) a').on('click', function(event) {
    event.preventDefault();
    $('.thanhmenu ul li').children().removeClass('dangchon');
    $(this).addClass('dangchon');
    return false;
});
$('.thanhmenu ul li:nth-child(3) a').on('click', function(event) {
    event.preventDefault();
    $('.thanhmenu ul li').children().removeClass('dangchon');
    $(this).addClass('dangchon');
    return false;
});
$('.thanhmenu ul li:nth-child(4) a').on('click', function(event) {
    event.preventDefault();
    $('.thanhmenu ul li').children().removeClass('dangchon');
    $(this).addClass('dangchon');
    return false;
});

/*projects filer*/

$('.khoi').isotope({
  itemSelector: '.cot',
});

$('.thanhmenu ul li a').click(function(event) {
    var danhmuc = $(this).data("abc");
    if (danhmuc == 'all'){
        $('.khoi').isotope({filter:'*'});
    }
    else {
        $('.khoi').isotope({filter:"."+danhmuc});
    }
    return false;
});


/*code for carousel bar*/
$('.khoilon .owl-carousel').owlCarousel({
    margin:20,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.doitac .owl-carousel').owlCarousel({
    margin:20,
    loop:true,
    dots: false,
    autoplayTimeout:1500,
    autoplay: true,
    responsive:{
        0:{
            items:2
        },
        800:{
            items:4
        },
        1000:{
            items:6
        }
    }
})



});
$(document).ready(function() {
	

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
        $(".quotes img").animate({top:(st-sq)/2},0)
    }
    else if (st<=sq) {
        $(".quotes img").animate({top:(sl-sq-900)/2},0)
    }
    else {
        $(".quotes img").animate({top:-(sl-sq-900)/2},0)
    }

});


/*projects filer*/

$(".thanhmenu li").click(function(event) {
    var danhmuc = $(this).data("abc")
    if (danhmuc == "all"){
        $(".sanpham .row.khoi").isotope({filter:'*'});
    }
    else {
        $(".sanpham .row.khoi").isotope({filter:"."+danhmuc});
    }
    return false;
});


});
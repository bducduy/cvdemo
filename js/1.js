$(document).ready(function() {
	

$(window).scroll(function (event) {
var st = $(this).scrollTop();
var ss = $(".about").offset().top;
if ((st >= 0) && (st < ss)) {
    $('.dautrang img').animate({top: st/3}, 0);
};
if (st > ss) {
    $('.dautrang img').animate({top: st/3}, 0);
}

});
});
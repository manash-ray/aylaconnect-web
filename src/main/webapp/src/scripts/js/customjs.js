$(document).ready(function() {
    var setheight = 200;
    var h = $('.wc-more').height();
    $('.wc-more').click(function () {
        $(this).addClass('addheight',"slow");
        /*$(".wc-more").animate({
            height: "auto",
        }, 500);*/
    });
});

$(document).ready(function(e){
            $('.navbar-form-rt .dropdown-menu').find('a').click(function(e) {
                e.preventDefault();
                var param = $(this).attr("href").replace("#","");
                var concept = $(this).text();
                $('.navbar-form-rt span#search_concept').text(concept);
                $('.navbar-form-rt .input-group #search_param').val(param);
            });
        });

//<![CDATA[
$(function(){
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.kh-top-search').outerHeight()+5;

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    //alert("Height of top :"+st+"<br/> Last scroll top : "+lastScrollTop+"<br/> Navbar Height: "+navbarHeight);
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.kh-top-search').removeClass('kh-nav-down').addClass('kh-nav-up');
    } else {
        // Scroll Up
        var a = $(document).height();
        var b = st + $(window).height();
        //alert(a+"-"+b);
        //if(st + $(window).height() < $(document).height()+1200) {
            $('.kh-top-search').removeClass('kh-nav-up').addClass('kh-nav-down');
        //}
    }
    
    lastScrollTop = st;
}
});//]]> 


/* For Accordion */
$(function () {
    $('#accordion.aboutpanel').on('shown.bs.collapse', function (e) {
        var offset = $('.panel.ad-card > .panel-collapse.in').offset();

        if(offset) {  
            $('html,body').animate({
                scrollTop: $('.panel-collapse.in').offset().top-160
            }, 500); 
        }
    }); 
});
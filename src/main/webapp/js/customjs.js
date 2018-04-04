



/* Only For Profile Page */
/*$(document).ready(function(){
	


	

         $.fn.editable.defaults.mode = 'inline'; 
         $.fn.editable.defaults.ajaxOptions = {type: "put"}    
         
         //make Designation editable
         $('#e-designation').editable({});
         
         //make Location editable
         $('#e-location').editable({});

  
	
	 $(".prof-menu .c-icon").click(function(){
         $("#contact-info-section").slideDown("medium");
         $('.c-icon').removeClass("active");
        $(this).addClass("active");
     });
     $("#contact-address").click(function(){
         if($("#contact-address-blk").css('display') == 'none'){
             $("#contact-info-section .row").hide(500);
             $("#contact-address-blk").show(1000);
         }else{
             $("#contact-info-section .row").hide(500);
             $("#contact-info-section").slideUp("slow");
         }
     });
     $("#contact-message").click(function(){
         if($("#contact-message-blk").css('display') == 'none'){
              $("#contact-info-section .row").hide(500);
             $("#contact-message-blk").show(1000);
         }else{
             $("#contact-info-section .row").hide(500);
             $("#contact-info-section").slideUp("slow");
         }
     });
     $("#contact-like").click(function(){
         if($("#contact-like-blk").css('display') == 'none'){
             $("#contact-info-section .row").hide(500);
             $("#contact-like-blk").show(1000);
         }else{
             $("#contact-info-section .row").hide(500);
             $("#contact-info-section").slideUp("slow");
         }
     });
     $("#contact-share").click(function(){
         if($("#contact-share-blk").css('display') == 'none'){
             $("#contact-info-section .row").hide(500);
             $("#contact-share-blk").show(1000);
         }else{
             $("#contact-info-section .row").hide(500);
             $("#contact-info-section").slideUp("slow");
         }
     });
     $("#contact-recommend").click(function(){
         if($("#contact-recommend-blk").css('display') == 'none'){
             $("#contact-info-section .row").hide(500);
             $("#contact-recommend-blk").show(1000);
         }else{
             $("#contact-info-section .row").hide(500);
             $("#contact-info-section").slideUp("slow");
         }
     });
     $("#contact-recommend").click(function(){
         
             $("#contact-info-section .row").hide(500);
             window.location.href = "";
     });
     $("#contact-clock").click(function(){
          $("#contact-info-section .row").hide(500);
        window.location.href = "/kriticalhealthweb/activity";
     });
     $("#contact-more").click(function(){
         if($("#contact-more-blk").css('display') == 'none'){
             $("#contact-info-section .row").hide(500);
             $("#contact-more-blk").show(1000);
         }else{
             $("#contact-info-section .row").hide(500);
             $("#contact-info-section").slideUp("slow");
         }
     });
});*/

/* Activity Page */

$(document).ready(function(){
    $(".da-status").click(function(){
        
        if($(".act-status-one").css('display') == 'none'){
            $(".act-status-form").hide(500);
            $(".act-status-one").show(1000);
            $('.d-button').removeClass("active");
           $(this).addClass("active");
         }
    });
    $(".da-photo").click(function(){
        if($(".act-status-photo").css('display') == 'none'){
            $(".act-status-form").hide(500);
            $(".act-status-photo").show(1000);
            $('.d-button').removeClass("active");
           $(this).addClass("active");
       }
    });
    $(".da-post").click(function(){
    	if($(".act-status-post").css('display') == 'none'){
            $(".act-status-form").hide(500);
            $(".act-status-post").show(1000);
            $('.d-button').removeClass("active");
           $(this).addClass("active");
         }
    });

    /* Status comment*/
    $("#act-cmt-1").submit(function(){
        var comment = $("#act-cmt-1 .act-comment").val();
        $(".cmt1").append('<div class="comment-entry"><div class="comment-pic"><img src="img/profile-icon-small.png" width="35" class="img-circle"/></div><div class="comment-text"><a href="#">Abraham Mathew</a><p>'+ comment +'</p></div><span class="pull-right act-com-time">1min</span></div>');
        $("#act-cmt-1 .act-comment").val('');
        return false;

    });
    
    $("#coverImg").change(function(){
        readURL1(this,'coverImgView');
        $('#coverImgView').show(1000);
    });
    $("#imgstaff").change(function(){
    	readURL1(this,'imgstaffview');
        $('#imgstaffview').show(1000);
    });
    $("#imgfacility").change(function(){
        readURL1(this,'blahfacility');
        $('#blahfacility').show(1000);
    });

    $("#imgInp").change(function(){
        readURL(this);
        $('#blah').show(1000);
    });
    $("#Team").change(function(){
        readURL1(this);
        $('#blahTeam').show(1000);
    });

});

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


/* Image upload */
 function readURL(input) {
	 
	
	 var file = input.files[0];
	 var fileType = file["type"];
	 var ValidImageTypes = ["image/gif", "image/jpeg", "image/png"];
	 if ($.inArray(fileType, ValidImageTypes) < 0) {
		
		

	
	 }
	 
	 else{
		 if (input.files && input.files[0]) {
		        var reader = new FileReader();
		        
		        reader.onload = function (e) {
		            $('#blah').attr('src', e.target.result);
		        }
		        
		        reader.readAsDataURL(input.files[0]);
		    }
		 
		
		 
	 }

	 
	 
	 
	 
   
    
    
}
 function readURL1(input, showimg) {
     if (input.files && input.files[0]) {
         var reader = new FileReader();
         
         reader.onload = function (e) {
             $('#'+showimg).attr('src', e.target.result);
         }
         
         reader.readAsDataURL(input.files[0]);
     }
 }
 

 
 var recorte = $('.img-container > img');
 recorte.cropper({
     movable: false,
     zoomable: false,
     rotatable: false,
     scalable: false,
     aspectRatio: 1 / 1
 });
 
 
 
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
 
 

     


 
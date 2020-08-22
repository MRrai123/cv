
$(window).on("load",function(){
$(".loader .innerloader").fadeOut(500,function(){
	$(".loader").fadeOut(500);

});
});

$(document).ready(function(){
	$('#slides').superslides({
		animation : 'fade',
		play: 3000,
		animation_speed: 3000,
		pagination: false
	});
	var typed = new Typed('.typed',{
		strings: ["Web Developer.","Student."],
		typeSpeed:70,
		loop:true,
		startDelay:1000,
		showCursor: false
	});
	$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
	});
	$('.chart').easyPieChart({
           easing:'easeInOut',
           barColor:'#fff',
           trackColor: false,
           scaleColor: false,
           lineWidth:4,
           size:152,
           onStep: function(from,t0,percent){
           	$(this.el).find('.percent').text(Math.round(percent));
           }
        });
	var skillTopOffset=$(".skillssection").offset().top;
	$(window).scroll(function() {
		if(window.pageYOffset > skillTopOffset-$(window).height()+1200){
			$('.chart').easyPieChart({
		    easing:'easeInOut',
		    barColor:'#fff',
		    trackColor: false,
		    scaleColor: false,
		    lineWidth:4,
		    size:152,
		    onStep: function(from,t0,percent){
		    $(this.el).find('.percent').text(Math.round(percent));
		    }
       		});

		}

	});

});
$(document).ready(function($) 
{
	$("#slider").responsiveSlides(
	{
    	auto: true,
      	nav: true,
      	speed: 500,
        namespace: "callbacks",
        pager: true,
    });
	
	$(".scroll").click(function(event)
	{
		event.preventDefault();
        $('html,body').animate(
		{
        	scrollTop:$(this.hash).offset().top
		},1200);
	});
	
	$().UItoTop(
	{
      easingType: 'easeOutQuart' 
	});
	 
    $(".swipebox").swipebox();
	
	$("span.menu").click(function()
	{
		$(".top-menu ul").slideToggle("slow" , function()
		{
        });
    });
	
	$(function()
	{
    	SyntaxHighlighter.all();
    });
	
	$(window).load(function()
	{
    	$('.flexslider').flexslider(
		{
			animation: "slide",
            start: function(slider)
			{
              $('body').removeClass('loading');
            }
        });
    });

	$().UItoTop(
	{
    	easingType: 'easeOutQuart' 
	});
});
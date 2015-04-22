$(document).ready(function() 
{
	
     $('.flexslider').flexslider(
	 {
		animation: "slide",
		animationLoop: false,
		pausePlay: true,
        start: function(slider)
		{
          $('body').removeClass('loading');
        }
	 });
    
    
});
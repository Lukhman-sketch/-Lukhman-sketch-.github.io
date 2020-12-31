
$(window).scroll(function() 
{
 if ($(this).scrollTop() > 1)
 {
  $('#navbar').addClass("sticky_header");
 }
 else
 {
  $('#navbar').removeClass("sticky_header");
 }
});

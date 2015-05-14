
$(document).ready(function(){

 script = document.createElement("script");
 script.type = "text/javascript";
 script.src = "http://assets.photobox.com/assets/content_graphics/files/marketing/pr/fdc15/index.json?callback=gallery";


 



 var vid = $('#videolayer');
 var pauseButton = $('#videotoggle');
 function vidFade() {
  vid.addClass('stopfade');
 }
 vid.on('ended', function() {
  // only functional if "loop" is removed
  vid.get(0).pause();
  // to capture IE10
  vidFade();
 });
 pauseButton.click(function() {
  vid.toggleClass('stopfade');
  if (vid.get(0).paused) {
   vid.get(0).play();
  //pauseButton.innerHTML = "Pause Video";
  pauseButton.css('opacity', '0');
 } else {
  vid.get(0).pause();
  //pauseButton.innerHTML = "Play Video";
  pauseButton.css('opacity', '0.5');
 }
})

 // browser window scroll (in pixels) after which the "back to top" link is shown
 var offset = 300,
  //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  offset_opacity = 1200,
  //duration of the top scrolling animation (in ms)
  scroll_top_duration = 700,
  //grab the "back to top" link
  $back_to_top = $('.cd-top');

 //hide or show the "back to top" link
 $(window).scroll(function(){
  ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
  if( $(this).scrollTop() > offset_opacity ) { 
   $back_to_top.addClass('cd-fade-out');
  }
 });

 //smooth scroll to top
 $back_to_top.on('click', function(event){
  event.preventDefault();
  $('body,html').animate({
   scrollTop: 0 ,
  }, scroll_top_duration
  );
 });

});

$(document).ready(function(){

//When loading the page it will show a splash loading page
$(".main-background").hide();
	
$('.loading-page').fadeIn(1000);

setTimeout(function(){
$(".loading-page").fadeOut(2000);
$(".main-background").show();
$("body").addClass("main-background");

},3000);

//

});


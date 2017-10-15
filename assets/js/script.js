
$(document).ready(function(){

//When loading the page it will show a splash loading page
$("nav").hide();
$(".main-background").hide();
$('main').hide();
	
$('.loading-page').fadeIn(1000);

setTimeout(function(){
$(".loading-page").fadeOut(2000);
$(".main-background").show();
$("body").addClass("main-background");
$("nav").show();
$('main').fadeIn(3000);

},2000);

//button in index page
$("#enter-btn").on("click", function(){
$("main-background").fadeOut(800);

});

//div for mmain menu with links to other pages and links to github and linkedIn
var menu = $("<div>");
var linkedin = "<img src='assets/images/linkedin.png'>";
var github = "<img src='assets/images/github.png'>";
var mail = "<img src='assets/images/mail.png'>";
menu.html("<span class=\"glyphicon glyphicon-remove\" id=\"close\"></span>" +
	"<ul class=\"text-center\">" +
	        "<li><a href=\"skills.html\">SKILLS</a></li>" +
	        "<li><a href=\"portfolio.html\">PORTFOLIO</a></li>" +
	        "<li><a href=\"About\">ABOUT</a></li>" +
	     "</ul>"
	     +"<div class=\"row\"><div class='col-sm-4 links'>" + linkedin+ "</div><div class='col-sm-4 links'>"+ github+ "</div><div class='col-sm-4 links'>"+ mail +"</div></div>");
menu.addClass("menu text-right");

$("main").append(menu);
$(".menu").hide();

$("#menu-btn").on("click", function(){
		$(".menu").show({ direction: "left" }, 2000);
	
});

$("#close").on("click", function(){
	$(".menu").hide();
});

//-----------------------------------------------------------------------------------------

//function on mouseover the portfolio items 
var flipped = false;
$("#hangman-btn").on("click", function(){
	if(flipped === false){
		$("#hangman").addClass("animated flipInY");
		$("#hangman").removeClass("flip");
		$("#hangman").html("<div class='container-fluid text-justify'><h2>Hangman</h2><p>This Website was created to showcase my JavaScript and jQuery skills.</p>"+
			" <p>JavaScript handles the logic of the game as well as some of the animation of the page. CSS elements are incorporated to give the page the selected team themes.</p>"+
			"<p>The game is simple, but fun, a word is generated randomly and it takes inputs from your keyboard or the buttons. Give it a try and see how many words you can get right!</p></div>");
		flipped = true;
	}else{
		$("#hangman").addClass("flip");
		$("#hangman").removeClass("flipInY");
		$("#hangman").html("<img src=\"assets/images/hangman.png\" class=\"img-responsive\">")
		flipped = false;
	}

});



		

});


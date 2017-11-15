
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
var linkedin = "<a href='https://www.linkedin.com/in/cesar-caceres/'><img src='assets/images/linkedin.png'></a>";
var github = "<a href='https://github.com/cesarc770'><img src='assets/images/github.png'></a>";
var mail = "<a href='mailto:cesarc770@gmail.com'><img src='assets/images/mail.png'></a>";
menu.html("<span class=\"glyphicon glyphicon-remove\" id=\"close\"></span>" +
	"<ul class=\"text-center\">" +
	        "<li><a href=\"skills.html\">SKILLS</a></li>" +
	        "<li><a href=\"portfolio.html\">PORTFOLIO</a></li>" +
	        "<li><a href=\"about.html\">ABOUT</a></li>" +
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

//function portfolio items 
var flippedHang = false;
var flippedRPG = false;
$("#hangman-btn").on("click", function(){
	if(flippedHang === false){
		$("#hangman").addClass("animated flipInY");
		$("#hangman").removeClass("flip");
		$("#hangman").html("<div class='container-fluid text-justify'><h2>El \"Futbol\" Hangman</h2><p>This Website was created to showcase my JavaScript and jQuery skills.</p>"+
		"<p>It's a fun game; a word is generated randomly and it takes inputs from your keyboard or the buttons. Give it a try and see how many words you can get right!</p>"+
		"<p> Click <a href='https://github.com/cesarc770/Hangman-Game' target='_blank'>here</a> to see the code in GitHub or "+
		"<a href='http://www.cesaracaceres.com/Hangman-Game/' target='_blank'>Go to Site</a></div>");
		flippedHang = true;
	}else{
		$("#hangman").addClass("flip");
		$("#hangman").removeClass("flipInY");
		$("#hangman").html("<img src=\"assets/images/hangman.png\" class=\"img-responsive\">")
		flippedHang = false;
	}

});

$("#rpg-btn").on("click", function(){
	if(flippedRPG === false){
		$("#rpg").addClass("animated flipInY");
		$("#rpg").removeClass("flip");
		$("#rpg").html("<div class='container-fluid text-justify'><h2>Pokemon RPG</h2><p>This Website was created to showcase my JavaScript and jQuery skills.</p>"+
		"<p>Pick your Pokemon, pick one to battle and beat them all. The base attack of the pokemon you choose increases by its own power's base each time you attack while your opponent's attack stays the same.</p>"+
		"<p> Click <a href='https://github.com/cesarc770/RPG-Game' target='_blank'>here</a> to see the code in GitHub or "+
		"<a href='http://www.cesaracaceres.com/RPG-Game/' target='_blank'>Go to Site</a></div>");
		flippedRPG = true;
	}else{
		$("#rpg").addClass("flip");
		$("#rpg").removeClass("flipInY");
		$("#rpg").html("<img src=\"assets/images/rpg.png\" class=\"img-responsive\">")
		flippedRPG = false;
	}

});

$("#pets-btn").on("click", function(){
	if(flippedHang === false){
		$("#pets").addClass("animated flipInY");
		$("#pets").removeClass("flip");
		$("#pets").html("<div class='container-fluid text-justify'><h2>FOREVER PETS</h2><p>This website was created to help people find a pet that fits them and learn good ways to take care of their particular pet.</p>"+
		"<p>We use JavaScript functions to calculate the best options of dog breeds for you based on the information you provide</p>"+
		"<p>It pulls data from Pet adoption APIs as well as the YouTube API. The applicaiton uses Firebase to store information. </p>"+
		"<p> Click <a href='https://github.com/cesarc770/Pet-Project/' target='_blank'>here</a> to see the code in GitHub or "+
		"<a href='http://www.cesaracaceres.com/Pet-Project/' target='_blank'>Go to Site</a></div>");
		flippedHang = true;
	}else{
		$("#pets").addClass("flip");
		$("#pets").removeClass("flipInY");
		$("#pets").html("<img src=\"assets/images/pets.png\" class=\"img-responsive\">")
		flippedHang = false;
	}

});


		

});


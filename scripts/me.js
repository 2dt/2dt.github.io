if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 350);

}

var x = 0;

var titleText = [ "j", "jo", "jok","jok3","jok3r","jok3r.","jok3r.","jok3r.c","jok3r.cc", "jok3r.c", "jok3r.", "jok3r.","jok3r","jok3","jok","jo.","j",];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
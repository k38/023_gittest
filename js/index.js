/* index.js　

*/


$(main);

function main(){
	move();
	$("#hello").bind("click touchend", move);
	$("#hello2").bind("click touchend", move2);
	$("#hello2").bind("webkitAnimationEnd", move2_end);
}

function move(){
	$("#hello").css("left","0%");
	$("#hello").css("opacity",0);
	$("#hello").animate({left: "50%", opacity: 1}, 1000);
}

function move2(){
	$("#hello2").css("webkitAnimationName", "webkitslide");
}

function move2_end(){
	$("#hello2").css("webkitAnimationName", "none");
}


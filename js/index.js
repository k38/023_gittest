/* index.js　

*/


$(main);

function main(){
	move();
	$("#hello").bind("click touchend", move);
	$("#hello2").bind("click touchend", move2);
//	$("#hello2").bind("webkitAnimationEnd", move2_end);
	$("#hello2").bind("animationEnd", move2_end);
}

function move(){
	$("#hello").css("left","0%");
	$("#hello").css("opacity",0);
	$("#hello").animate({left: "50%", opacity: 1}, 1000);
}

function move2(){
//	$("#hello2").css("webkitAnimationName", "webkitslide");
	$("#hello2").css("animationName", "slide");
}

function move2_end(){
//	$("#hello2").css("webkitAnimationName", "none");
	$("#hello2").css("animationName", "none");
}


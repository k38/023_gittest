/* index.js　

*/


$(main);

function main(){
	move();
	$("#hello").bind("click touchend", move);
}

function move(){
	$("#hello").css("left","0%");
	$("#hello").css("opacity",0);
	$("#hello").animate({left: "50%", opacity: 1}, 1000);
}

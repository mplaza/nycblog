$(document).ready(function(){
	var p = $('body');
//$("#ladder").on("click", function(){
//	var scrollPos = p.scrollTop();
//	if(scrollPos > 200){
//		alert("scrolling");
//		console.log(scrollPos);
//		}
//	});
//$("#ladder").on("scroll", function(){
//	var scrollPos = p.scrollTop();
//	if(scrollPos > 300){
//		alert("scrolling");
//		console.log(scrollPos);
//		}
//	});
var ladderOffset = $("#ladder").offset().top-55;
$(window).scroll(function(){
	var y = $(this).scrollTop();
	if (y >= ladderOffset){
		$("#ladder").addClass("fixed");
	};
});
var cheeseOffset = $("#cheese").offset().top-20;
$(window).scroll(function(){
	var y = $(this).scrollTop();
	if (y >= cheeseOffset){
		$("#cheese").addClass("fixed");
	};
});
var mouseOffset = $("#mouse").offset().top-25;
console.log(mouseOffset);
$(window).scroll(function(){
	var y = $(this).scrollTop();
	if (y >= mouseOffset){
		$("#mouse").addClass("fixed");
	};
});
$(window).scroll(function(){
	var y = $(this).scrollTop();
	if( y > mouseOffset+50){
		$("#cheese.fixed").animate({opacity: '0'}, 1000);
	};
});
$(window).scroll(function(){
	var y = $(this).scrollTop();
	if( y > mouseOffset+200){
		$("#balloon").show();
		$("#balloon").animate({top:'450', left:'40'}, 5000).delay(1000).animate({top:'+=5'}, 3000);
		$("#mouse").animate({top:'505', left:'50'}, 5000);
		$("#ladder").animate({opacity: '0'}, 1000);
	};
});
$(".seeMore").on("click", function(){
	$(".initPost").animate({height:'100%'}, 1000);
	$(".seeMore").hide();
});

});
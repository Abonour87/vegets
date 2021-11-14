
// $(window).load(function(){
// 	$(".loader_bg").fadeIn().delay("2000").fadeOut();
// })

$(function(){
	$(".header .header-butt >a").click(function(){
		$(".header .header-nav ul").slideToggle(1000)
	})

})
// $(window).on("resize",function(){
// 	var innerw = $(window).innerWidth();
// 	if(innerw > 730){
		// $(".header .header-nav ul").slideUp(500)
// 	}
// })
$(".header .header-nav ul li a").click(function(){
	$("html,body").animate({
		scrollTop : $($(this).data("target")).offset().top
},1000)
})

$(function(){
	$(".index_top_span").click(function(){
		$("#index_top_wrap").css("display","none")
	})
	
	$(".index_menu_right_list3").hover(function(){
		$(".index_menu_right_down").css("display","block")
		$(".index_menu_right_list3_span1").css({"z-index":5,"display":"block"})
	},function(){
		$(".index_menu_right_down").css("display","none")
		$(".index_menu_right_list3_span1").css({"z-index":-1,"display":"none"})
	})
	
	//回到顶部
	$(window).scroll(function(){
		var flag = true;
		if(flag){
			var scrollTop = $(this).scrollTop();
			if(scrollTop>100){
				$(".s-top").css("display","block");
			}else{
				$(".s-top").css("display","none");
			}
						
		}			
	})
	$(".s-cart").hover(function(){
		$(".cart-list").animate({right:0},1000);
		$(".cart-wrap").animate({"display":"block"},1000);
		
	},function(){
		$(".cart-list").animate({right:"-101%"},1000);
		$(".cart-wrap").animate({"display":"none"},1000);
	})

})



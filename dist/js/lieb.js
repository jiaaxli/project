$(function(){
	var url = "http://datainfo.duapp.com/shopdata/getGoods.php?callback=?";
	$.getJSON(url,function(obj){
		//console.log(obj)
		var str=""
		var str2 =""
		for(var i=0;i<obj.length;i++){
			//console.log(obj[i])
			str+=`
				<li>
								<div class="index_main2_leftB_div1">
									<a href="">
										<img src="${obj[i].goodsListImg}" />
									</a>
								</div>
								<div class="index_main2_leftB_div2">
									<a href="">${obj[i].goodsName}</a>
								</div>
								<div class="index_main2_leftB_div3">
									￥245
								</div>
								<div class="index_main2_leftB_div4">
									会员价
									<b>${obj[i].price}</b>
								</div>
								<a href="" class="index_main2_leftB_a">抢购</a>
							</li>
			`
			str2+=`
				<li>
								<div class="index_main4_rightL_div1">
									<a href="">
										<img src="${obj[i].goodsListImg}" />
									</a>
									<div class="index_main4_rightL_div1D">
										<a href="">加入购物车</a>
									</div>
								</div>
								<div class="index_main4_rightL_div2">
									<a href="">${obj[i].goodsName}</a>
								</div>
								<div class="index_main4_rightL_div3">
									<span>
										<i>￥</i>
										${obj[i].price}
										
									</span>
								</div>
							</li>
			`
		}
		$(".index_main2_leftB ul").append(str)
		$(".index_main4_rightL ul").append(str2)
	})
})

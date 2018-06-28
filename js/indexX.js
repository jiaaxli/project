$(function(){
	var url="http://datainfo.duapp.com/shopdata/getGoods.php?callback=?";
	
	var $ul = $(".index_main1_list");
	$.getJSON(url,function(jso){
		//console.log(jso)
		var strr = ""
		for(var i = 0;i<jso.length;i++){
			//console.log(jso[i])
			var obj =jso[i];
			strr+=`
				<li>
					<a href="" class="index_main1_a1">${obj.goodsName}</a>
					<div class="index_main1_div1">
						<span>
							<i>￥</i>
								${obj.price}
						</span>
					</div>
					<a href="" class="index_main1_a2"><img src="${obj.goodsListImg}"/></a>
						<div class="index_main1_div2">
							<a href="">
								加入购物车
							</a>
						</div>
				</li>
			`
		}
		$(".index_main1_list").append(strr)
	})
})

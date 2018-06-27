$(function(){
	$(".details_a").hover(function(){
		$(".index_nav_uplist").css("display","block")
	},function(){
		$(".index_nav_uplist").css("display","none")
	})
	
	
	$(".details_list li").hover(function(){
		$(this).css("border", "5px solid #f5f5f5");
		$(".details_listD").css("border","1px solid #d7d7d7")
	},function(){
		$(this).css("border", 0);
		$(".details_listD").css("border",0)
	})
	
	var url = "http://datainfo.duapp.com/shopdata/getGoods.php?callback=?"
	var classid = location.search.split("=")[1];
	$.getJSON(url,{classID:classid},function(data){
		//console.log(det)
		var str = "";
		for(var i = 0;i<data.length;i++){
			//console.log(data[i])
			str+=`
				<li>
					<div class="details_listD">
						<div class="details_listD_div1">
							<a href="xiang.html?id=${data[i].goodsID}">
								<img src="${data[i].goodsListImg}" />
							</a>
						</div>
						<div class="details_listD_div2">
							<span class="details_listD_div2S">
								<span class="details_listD_div2S1">
									￥
									<strong>${data[i].price}</strong>
								</span>
							</span>
						</div>
						<div class="details_listD_div3">
							<a href="xiang.html?id=${data[i].goodsID}">${data[i].goodsName}</a>
						</div>
						
						<div class="details_listD_div5">
							<div class="details_listD_div5D1">
								<span>
									<a href="">-</a>
								</span>
								<span>
									<input type="text" />
								</span>
								<span>
									<a href="">+</a>
								</span>
							</div>
							<div class="details_listD_div5D2">
								<div>
									<a href="">加入购物车</a>
								</div>
							</div>
						</div>
					</div>
				</li>
			`
		}
		$(".details_list").append(str)
	})
	
})






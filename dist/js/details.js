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
							<div class="details_listD_div5D1" data=${data[i].goodsID}>
								
									<a class="down">-</a>
								
								
									<input type="text" class ="sapn_input" value="1"/>
								
									<a class="up">+</a>
								
							</div>
							<div class="details_listD_div5D2">
								<div>
									<a data=${data[i].goodsID}>加入购物车</a>
								</div>
							</div>
						</div>
					</div>
				</li>
			`
		}
		$(".details_list").append(str);
		//添加商品到购物车
		$(".details_listD_div5D2 div a").click(function(){
			var ospan=$(".sapn_input").val()
			$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:$(this).attr("data")},function(data){
				console.log(data)
				//console.log(data);
					if(data==0){
						alert("添加失败");
					}
					if(data==1){
						console.log("添加成功")
					}
			})
		})
		
		//减少商品数量
		$(".down a").click(function(){
			if($(this).next().val()<=1){
				$(this).next().val(1);
			}else{
				$(this).next().val($(this).next().val()-1);
			}
			$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:$(this).parent().attr("data"),number:$(this).next().val()},function(data){})
			
		})
		//添加商品数量
		$(".up").click(function(){
			$(this).prev().val($(this).prev().val()-0+1);
			
			$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:$(this).parent().attr("data"),number:$(this).prev().val()},function(data){})
			
		})
		
		
	})
	
})






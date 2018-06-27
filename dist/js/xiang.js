$(function(){
	var goodsid = location.search.split("=")[1];
	var str = "";
	var url = "http://datainfo.duapp.com/shopdata/getGoods.php?callback=?";
	$.getJSON(url,{goodsID:goodsid},function(data){
		//console.log(data)
		console.log(data[0].goodsID)
		str+=`
			<div id="zoomBox">
				<div id="midArea">
					<img src="${data[0].goodsListImg}">
					<div id="zoom"></div>
				</div>
				<div id="bigArea">
					<img src="${data[0].goodsListImg}">
				</div>
				<div id="smallArea">
					<!--点击小图，将中图和大图的img的src换掉-->
				</div>
			</div>
			
			
			<div class="x_main_right">
				<h3>${data[0].goodsName}</h3>
				<div class="x_main_rightD">
					优选价
					<span>${data[0].price}</span>
				</div>
				<div class="x_main_rightD1">
					
					<a class="x_main_rightD1a">加入购物车</a>
					<a>一键购买</a>
				</div>
			</div>		
		`
		$("#x_main").append(str);
		//console.log(str)
		$(".x_main_rightD1a").click(function(){
			//$.cookie("goodsID",data[0].goodsID,{expires:7,path:"/"});
			//console.log("aaa")
			$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:data[0].goodsID},function(data){
				console.log(data)
				//console.log(data);
					if(data==0){
						alert("添加失败");
					}
					if(data == 1){
						//alert("添加成功")
						location.href = "cart.html";
					}
			})
		})
	})
})

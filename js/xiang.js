$(function(){
	var goodsid = location.search.split("=")[1];
	var str = "";
	var url = "http://datainfo.duapp.com/shopdata/getGoods.php?callback=?";
	$.getJSON(url,{goodsID:goodsid},function(data){
		//console.log(data)
		//data = JSON.parse(data)
		imgsUrl = JSON.parse(data[0].imgsUrl);
		//console.log(imgsUrl)
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
					
				</div>
			</div>
			
			
			<div class="x_main_right">
				<h3>${data[0].goodsName}</h3>
				<div class="x_main_rightD">
					优选价
					<span>${data[0].price}</span>
				</div>
				<div class="x_main_rightD1">
					<div class="pAmount">
                        <span>
                            <input type="text" id="number_217621" class="text" value="1">
                        </span>
                        <span>
                            <a id="add-sell-num" class="p-add">+</a>
                            <a id="reduce-sell-num" class="p-reduce disable">-</a>
                        </span>
                    </div>
                    <div class="pBtn" id="cart-add-btn-sf">
						<a>
							<b></b>
							加入购物车
						</a>
					</div>
					<div class="pBtn quickBuy" id="quickBuy">
						<a>
							一键购买
						</a>
					</div>
				</div>
			</div>		
		`
		$("#x_main").append(str);
		
		//获取商品小图片
		for (var i=0;i<imgsUrl.length;i++) {
			var oImg =document.createElement("img");
			oImg.src = imgsUrl[i];
			$("#smallArea")[0].appendChild(oImg);
		}
		$("#smallArea img").hover(function(){
			var src = $(this)[0].src;

//			console.log($("#bigArea img")[0].src)
			$("#bigArea img")[0].src=src;
			$("#midArea img")[0].src=src;
		})
		
		
		$(".p-add").click(function(){
			var num = $(".text").val();
			 num++;
//			 
			$(".text").val(num);
			if(num>1){
				$(".p-reduce").removeClass("disable")
			}
		})
		$(".p-reduce").click(function(){
			var num = $(".text").val();
			num--;
			if(num<=1){
			 	num = 1;
			 	$(".p-reduce").addClass("disable")
			}
			$(".text").val(num);
		})
		
		//console.log(str)
		//点击添加到购物车
		$(".pBtn").click(function(){
			//console.log($(".text").val())
			var num = $(".text").val()
			$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:data[0].goodsID,number:num},function(data){
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

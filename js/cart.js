$(function(){
	var str ="";
	$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
	if(data!=0){
		for(var i=0;i<data.length;i++){

			//console.log(data[i].goodsID)
			var a=data[i].price*data[i].number
			str+=`
				<div class="cartItem">
	        		<div class="pItem pCheckbox">
	                    <input type="checkbox" checked="checked">
	                </div>
					
	            	<div class="clearfix">
	                	<div class="cart_pimg">
	                    	<a href="">
	                       		<img width="62" height="62" src="${data[i].goodsListImg}">
	                    	</a>
	                	</div>
	                								
	                    <div class="cart_pname">
	                        <a href="">${data[i].goodsName}</a>
	                    </div>
	               
	            	</div>
	        		<div class="pItem spree_sm03">
	                	<strong>${data[i].price}</strong>
	                </div>
	            	<div class="pItem pQuantity">
            				<div class="cartAmount" data=${data[i].goodsID}>
                                <a class="cartCountBtn numberCtrl down">-</a>
                				<input type="text" value="${data[i].number}" class="amount pAmount" id="main-0-25537977-217621-amount">
                				<a class="cartCountBtn numberCtrl up" >+</a>
                           </div>
        			</div>
	        		<div class="pItem pSubtotal">
	        			¥
	        			<span id="total_price" class="total_price">${a}</span>
	        		</div>
	        		<div class="pItem pInventory">现货</div>
	        		<div class="pItem pOperator">
	                    <a class="cartDel" class="remove" data=${data[i].goodsID}>删除</a>
	                </div>
	    		</div>
			`	
		}
	}else{
		str+=`
				<h2>您的购物车没有东西</h2>			
			`
	}
		
		$("#prodList").append(str);
		
		//减少商品		
		$(".down").click(function(){
			if($(this).next().val()<=1){
				$(this).next().val(1);
			}else{
				$(this).next().val($(this).next().val()-1);
			}
			$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:$(this).parent().attr("data"),number:$(this).next().val()},function(data){})
			
		})
		//添加商品
		$(".up").click(function(){
			$(this).prev().val($(this).prev().val()-0+1);
			
			$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:$(this).parent().attr("data"),number:$(this).prev().val()},function(data){})
			
		})
		
		//获取所有商品总价
		var aa = 0;
		var num = $(".total_price").text()
		console.log($(".total_price").text())
		$(".total_price").each(function(index,item){
			console.log(item.text)
			//console.log(item.)
			aa += (item.value-0);
		})
		
		//删除商品
		$(".cartDel").click(function(){
			$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:$(this).attr("data"),number:0},function(data){
				
			})
			$(this).parent().parent().remove()
		})
		
		
	})
})

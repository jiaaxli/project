$(function(){
	var str ="";
	$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
		if(data==0){
			str+=`
				<h2>您的购物车没有东西</h2>			
			`
		}
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
	            	<div class="cartAmount">
	                	<input type="text" value="${data[i].number}">
	            	</div>
	        		<div class="pItem pSubtotal">
	        			¥
	        			<span id="total_price">${a}</span>
	        		</div>
	        		<div class="pItem pInventory">现货</div>
	        		<div class="pItem pOperator">
	                    <a class="cartDel" class="remove" data=${data[i].goodsID}>删除</a>
	                </div>
	    		</div>
			`	
		}
		$("#prodList").append(str);
			$(".cartDel").click(function(){
				
				//console.log($(this))
					
					//console.log(data[k].number)
					$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:$(this).attr("data"),number:0},function(data){
					
						
					})
					$(this).parent().parent().remove()
			})
			$(".cartAmount input").click(function(){
				console.log($(this).val())
				$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:$(this).attr("data"),number:$(this).val()},function(data){
					
						
					})
			})
		
	})
})

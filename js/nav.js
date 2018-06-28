$(function(){
	var url = "http://datainfo.duapp.com/shopdata/getclass.php";
	$.get(url,function(data){
		var str ="";
		data=JSON.parse(data);
		//console.log(data)
		for(var i=0;i<=7;i++){
			var obj = data[i];
			//console.log(data[i])
			str+=`
				<div class="index_item">
								<span class="index_item_span">
									<h3>
										<p></p>
										<a href="details.html?classID=${obj.classID}">${obj.className}</a>
									</h3>
									<ul>
										<li><a href="">牛肉</a></li>
										<li><a href="">鱼肉</a></li>
										<li><a href="">小龙虾</a></li>
										<li><a href="">羊肉</a></li>
									</ul>
								</span>
								<div class="index_item_div">
									<div class="index_item_divleft">
										<div class="index_item_divleft1">
											<dl>
												<dt>
													<strong>
														<a href="details.html?classID=${obj.classID}">${obj.className}</a>
													</strong>
												</dt>
												<dd>
													<a href="">牛肉</a>
													<a href="">羊肉</a>
													<a href="">猪肉</a>
													<a href="">鸡肉</a>
												</dd>
											</dl>
										</div>
										<div class="index_item_divleft1">
											<a href="">
												<img src="images/1529420009.jpg" />
											</a>
										</div>
									</div>
									<div class="index_item_divright">
										<span></span>
									</div>
								</div>
							</div>
			`
		}
		$(".index_nav_uplist1").append(str)
	})
})

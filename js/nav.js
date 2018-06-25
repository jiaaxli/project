
$(function(){
	 //@charset 'utf-8';
	var url="";//https://dc.3.cn/category/get?callback=?
	$.getJSON(url,function(res){
		console.log(res);
		
		var $index_nav = $(".index_nav_uplist")
		for(var i =0;i<res.data.length;i++){
			var menu = res.data[i];
			var $index_item = $('<div class="index_item"></div>');
			$index_nav.append($index_item);
			
			var $index_item_div =$('<div class="index_item_div"></div>');
			$index_item.append($index_item_div);
			
			var $strong = $('<strong></strong>');
			$index_item_span.append($strong);
			
			for(let n=0;n<menu.t.length;n++){
				let tmpArray = menu.t[n].split('|');
				let $p = $('<p></p>');
				$p.html(tmpArray[1]);
				$strong.append($p);
				
				let $TmpA = $('<a>&gt</a>');
				$p.append($TmpA);
			}
			for(var j= 0;j<menu.s.length;j++){
				if(j>=1){
					$tmp = $('<a></a>')
				}
			}
		}
		
	})
})

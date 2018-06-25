(function autoImg(){
  		//轮播图
            $(".index_banner_lunbo1").append($(".index_banner_lunbo1 li").eq(0).clone());
             
            var timer=null;
            var count=0;//0-4 
            var k=0;//0-4 记录原点的位置
             
            timer=setInterval(autoPlay,3000);
            function autoPlay(){
                count++;
                if(count==8){
                    $(".index_banner_lunbo1").css("left",0)
                    count=0;
                }
                $(".index_banner_lunbo1").stop().animate({"left":-count*1000+"px"},800)
                k++;
                if(k==8){
                     
                    k=0;
                }
                $(".index_banner_xiabiao li").eq(k).addClass("current").siblings().removeClass("current")
            }
            $(".index_banner_xiabiao li").click(function(){
                $(this).addClass("current").siblings().removeClass("current")
                k=$(this).index();
                count=k;
                $(".index_banner_lunbo1").stop().animate({"left":-k*1000+"px"})
                 
            })
            $(".index_banner_lunbo").mouseenter(function(){
                clearInterval(timer);
            });
            $(".index_banner_lunbo").mouseleave(function(){
                timer = setInterval(autoPlay,3000)
            })
            //控制左边箭头
            $(".last").click(function(){
                count--;
                if(count==-1){
                    count=4;
                    $(".index_banner_lunbo1").css("left",-1000+"px")
                }
                $(".index_banner_lunbo1").stop().animate({"left":-count*1000+"px"})
                k=count;
                $(".auIndex li").eq(k).addClass("current").siblings().removeClass("current")
            })
            //控制右边箭头
            $(".next").click(function(){
                count++;
                if(count==5){
                    count=0;
                    $(".index_banner_lunbo1").css("left",0)
                }
                $(".index_banner_lunbo1").stop().animate({"left":-count*1000+"px"})
                k++;
                if(k==8){
                    k=0;
                     
                }
                $(".auIndex li").eq(k).addClass("current").siblings().removeClass("current")
            });
  	})();

$(function(){
	$("#btn").click(function(){
		$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"login",userID:$("#tel").val(),password:$("#passWord").val()},function(data){
			data = JSON.parse(data);
			console.log(data);
			if(data == 0){
				alert("用户名不存在");
			}else if(data==2){
				alert("用户名或者密码错误")
			}else{
				$.cookie("username",data.userID,{expires:7,path:"/"});
			location.href = "index.html";
			}
		})
	})

})
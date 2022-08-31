$(function(){
	bootbox.confirm("是否自动播放BGM?", function(result){
	    if(result) {
			$(".bgm").attr("autoplay","autoplay");
		} 
	});
});
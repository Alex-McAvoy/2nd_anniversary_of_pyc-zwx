var app = angular.module('app', []);

app.controller('HomeController', function($scope) {

	$scope.goal_title = "嫖总嫖娼日记";

	//图标显示
	$scope.goal_20200726 = true;
	$scope.goal_20200824 = true;
	$scope.goal_20200903 = true;
	$scope.goal_20200905 = true;
	$scope.goal_20200920 = true;
	$scope.goal_20201003 = true;
	$scope.goal_20201114 = true;
	$scope.goal_20210101 = true;
	$scope.goal_20210202 = true;
	$scope.goal_20210214 = true;
	$scope.goal_20210408 = true;
	$scope.goal_20210520 = true;
	$scope.goal_20210626 = true;
	$scope.goal_20210814 = true;
	$scope.goal_20210905 = true;
	$scope.goal_20211120 = true;
	$scope.goal_20220106 = true;
	$scope.goal_20220123 = true;
	$scope.goal_20220716 = true;
	$scope.goal_20220905 = true;

});

$(document).ready(function(e) {
	var viewport = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	// console.log(viewport);


	$('a').click(function(e) {
		e.preventDefault()
	})

	 
	$('.goal_wrap').click(function() {
		var diff = $(this).parent()[0].offsetLeft;
		var temp = $(this).parent()[0].children[0];
		alert(temp.attr(""));
		$('.date .goal_wrap').removeClass('active bounce');
		$(this).addClass('active bounce');
		TweenLite.to($('.date').parent(), 1, {
			x: ((viewport * 0.5) - diff),
			onComplete: function() {
				console.log('success');
			}
		});
	});
	

	//左箭头
	$("#left_arrow").click(function(){
		var diff = 380;
		TweenLite.to($("#timeline"), 1, {
			x: ((viewport * 0.5) - diff),
			onComplete: function() {
				console.log('success');
			}
		});
	});
	
	//右箭头
	$("#right_arrow").click(function(){
		alert($(this).className)
		var diff = $(this).parent()[0].offsetLeft;
		alert($(this).parent()[0].className)
		TweenLite.to($("#timeline"), 1, {
			x: ((viewport * 0.5) - diff),
			onComplete: function() {
				console.log('success');
			}
		});
	});

	//2020-07-26
	$("#goal_20200726").click(function() {
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20200726.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});
	
	//2020-08-24
	$("#goal_20200824").click(function() {
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20200824.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});
	
	//2020-09-03
	$("#goal_20200903").click(function() {
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20200903.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});
	
	//2020-09-05
	$("#goal_20200905").click(function() {
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20200905.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});
	
	//2020-09-20
	$("#goal_20200920").click(function() {
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20200920.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});
	
	//2020-10-03
	$("#goal_20201003").click(function() {
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20201003.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});
	
	//2020-11-14
	$("#goal_20201114").click(function() {
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20201114.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});
	
	//2021-01-01
	$("#goal_20210101").click(function() {
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20210101.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});
	
	//2021-02-02
	$("#goal_20210202").click(function() {
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20210202.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});
	
	//2021-02-14
	$("#goal_20210214").click(function() {
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20210214.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});
	
	//2021-04-08
	$("#goal_20210408").click(function() {
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20210408.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});
	
	//2021-05-20
	$("#goal_20210520").click(function() {
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20210520.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});
	
	//2021-06-26
	$("#goal_20210626").click(function() {
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20210626.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});
	
	//2021-08-14
	$("#goal_20210814").click(function() {
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20210814.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});
	
	//2021-09-05
	$("#goal_20210905").click(function() {
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20210905.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});
	
	//2021-11-20
	$("#goal_20211120").click(function() {
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20211120.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});
	
	//2022-01-06
	$("#goal_20220106").click(function() {
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20220106.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});
	
	//2022-01-23
	$("#goal_20220123").click(function() {
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20220123.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});
	
	//2022-07-16
	$("#goal_20220716").click(function() {
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20220716.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});
	
	//2022-09-05
	$("#goal_20220905").click(function() {
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20220905.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});
	
	
});

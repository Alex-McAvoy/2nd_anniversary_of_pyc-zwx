var app = angular.module('app', []);

app.controller('HomeController', function($scope) {
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

	var count = 3;
	//点击图标移动
	$('.goal_wrap').click(function() {
		var diff = $(this).parent()[0].offsetLeft;
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
	$("#left_arrow").click(function() {
		if (count > 3) {
			var diff = (count-2) * 380;
			count -= 1;
			TweenLite.to($("#timeline"), 1, {
				x: ((viewport * 0.5) - diff),
				onComplete: function() {
					console.log(count);
				}
			});
		}
	});

	//右箭头
	$("#right_arrow").click(function() {
		if (count <= 18) {
			var diff = count * 380;
			count += 1;
			TweenLite.to($("#timeline"), 1, {
				x: ((viewport * 0.5) - diff),
				onComplete: function() {
					console.log(count);
				}
			});
		}
	});

	//2020-07-26
	$("#goal_20200726").click(function() {
		$(".title").html("一切的开始<br>纪念我们那秒不可及的缘分");
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20200726.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});

	//2020-08-24
	$("#goal_20200824").click(function() {
		$(".title").html("我们看的第一场电影<br>你还记得“125军”和“摸头杀”么");
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20200824.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});

	//2020-09-03
	$("#goal_20200903").click(function() {
		$(".title").html("hhhhh第一次完美踩雷的“投喂”");
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20200903.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});

	//2020-09-05
	$("#goal_20200905").click(function() {
		$(".title").html("The first day<br>还记得那天的故事么");
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20200905.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});

	//2020-09-20
	$("#goal_20200920").click(function() {
		$(".title").html("我们官宣的故事你还记得么？<br>第一次暴躁的“护短”<br>晚风与我们");
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20200920.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});

	//2020-10-03
	$("#goal_20201003").click(function() {
		$(".title").html("我们的第一次旅行<br>阿那亚的海风与日出<br>你还记得吗？");
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20201003.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});

	//2020-11-14
	$("#goal_20201114").click(function() {
		$(".title").html("陪你度过的第一个生日<br>“成为网红第一步”");
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20201114.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});

	//2021-01-01
	$("#goal_20210101").click(function() {
		$(".title").html("我们的第一次跨年<br>一起看的第一场演唱会");
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20210101.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});

	//2021-02-02
	$("#goal_20210202").click(function() {
		$(".title").html("第一次滑雪<br>也是你第一次来到我生活的地方");
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20210202.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});

	//2021-02-14
	$("#goal_20210214").click(function() {
		$(".title").html("第一个情人节<br>Hakuna Matata");
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20210214.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});

	//2021-04-08
	$("#goal_20210408").click(function() {
		$(".title").html("陪我度过的第一个生日<br>我爱你，胜过朝夕");
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20210408.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});

	//2021-05-20
	$("#goal_20210520").click(function() {
		$(".title").html("第一个520<br>星河滚烫，你是人间理想");
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20210520.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});

	//2021-06-26
	$("#goal_20210626").click(function() {
		$(".title").html("第一次陪你毕业<br>我也终于享受了一次毕业<br>“我们毕业啦”");
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20210626.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});

	//2021-08-14
	$("#goal_20210814").click(function() {
		$(".title").html("度过我们的第一个七夕<br>也是我第一次收到了“花”");
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20210814.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});

	//2021-09-05
	$("#goal_20210905").click(function() {
		$(".title").html("我们一周年了！！！<br>感谢我们的双向奔赴");
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20210905.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});

	//2021-11-20
	$("#goal_20211120").click(function() {
		$(".title").html("你第一次来到武汉<br>同时我们又度过了<br>好多生日中的第二个生日");
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20211120.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});

	//2022-01-06
	$("#goal_20220106").click(function() {
		$(".title").html("我们的第一次“环球之旅”<br>之后还要一起去好多次哦");
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20220106.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});

	//2022-01-23
	$("#goal_20220123").click(function() {
		$(".title").html("第一个密室<br>“看，那里有个大冤种”");
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20220123.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});

	//2022-07-16
	$("#goal_20220716").click(function() {
		$(".title").html("真正意义上的第一次“惊喜”");
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20220716.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});

	//2022-09-05
	$("#goal_20220905").click(function() {
		$(".title").html("两周年<br>我亲爱的张维肖女士<br>我们拥有无数的第一次<br>还会有更多的第一次<br>请握紧我的手<br>坚定地迈向未来");
		
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20220905.png) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});


});

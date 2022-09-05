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

// 点击图标后，计算时间轴计数器返回值
function changeCount(id) {
	var viewport = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

	switch (id) {
		case "goal_20200726":
			return 3;
			break;
		case "goal_20200824":
			return 4;
			break;
		case "goal_20200903":
			return 5;
			break;
		case "goal_20200905":
			return 5;
			break;
		case "goal_20200920":
			return 6;
			break;
		case "goal_20201003":
			return 6;
			break;
		case "goal_20201114":
			return 7;
			break;
		case "goal_20210101":
			return 8;
			break;
		case "goal_20210202":
			return 9;
			break;
		case "goal_20210214":
			return 9;
			break;
		case "goal_20210408":
			return 10;
			break;
		case "goal_20210520":
			return 11;
			break;
		case "goal_20210626":
			return 12;
			break;
		case "goal_20210814":
			return 13;
			break;
		case "goal_20210905":
			return 14;
			break;
		case "goal_20211120":
			return 15;
			break;
		case "goal_20220106":
			return 16;
			break;
		case "goal_20220123":
			return 17;
			break;
		case "goal_20220716":
			return 20;
			break;
		case "goal_20220905":
			return 21;
			break;
		default:
			break;
	}

}

$(document).ready(function(e) {
	var viewport = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	// console.log(viewport);


	$('a').click(function(e) {
		e.preventDefault()
	});

	if (viewport < 960) { // PE
		var count = { // 时间轴移动计数器
			value: 1
		}
	} else { //PC
		var count = { // 时间轴移动计数器
			value: 3
		}
	}

	// 点击图标移动
	$('.goal_wrap').click(function() {
		count.value = changeCount($(this).attr("id")); //点击图标后，改变计数器的值

		var diff = $(this).parent()[0].offsetLeft;
		$('.date .goal_wrap').removeClass('active bounce');
		$(this).addClass('active bounce');
		TweenLite.to($('.date').parent(), 1, {
			x: ((viewport * 0.5) - diff),
			onComplete: function() {
				// console.log(count.value);
			}
		});
	});

	// 左箭头
	$("#left_arrow").click(function() {
		if (viewport < 960) { // PE
			if (count.value > 1) {
				var diff = (count.value - 2) * 380;
				count.value -= 1;
				TweenLite.to($("#timeline"), 1, {
					x: ((viewport * 0.5) - diff),
					onComplete: function() {
						// console.log(count.value);
					}
				});
			}
		} else { //PC
			if (count.value > 3) {
				var diff = (count.value - 2) * 380;
				count.value -= 1;
				TweenLite.to($("#timeline"), 1, {
					x: ((viewport * 0.5) - diff),
					onComplete: function() {
						// console.log(count.value);
					}
				});
			}
		}
	});

	// 右箭头
	$("#right_arrow").click(function() {
		if (viewport < 960) { // PE
			if (count.value == undefined) {
				count.value = 1;
			}

		} else { //PC
			if (count.value == undefined) {
				count.value = 3;
			}
		}

		if (count.value <= 20) {
			var diff = count.value * 380;
			count.value += 1;
			TweenLite.to($("#timeline"), 1, {
				x: ((viewport * 0.5) - diff),
				onComplete: function() {
					// console.log(count.value);
				}
			});
		}
	});

	// 实时监听时间轴计数器以决定是否显示左右箭头
	Object.defineProperty(count, 'value', {
		configurable: true,
		set: function(newVal) {
			this._value = newVal;
			console.log('set:' + this._value);

			if (viewport < 960 && newVal == 1) { // PE
				$(".left_arrow_div").css({
					"display": "none"
				});
			} else if (viewport >= 960 && newVal == 3) { // PC
				$(".left_arrow_div").css({
					"display": "none"
				});
			} else if (newVal == 21) {
				$(".right_arrow_div").css({
					"display": "none"
				});
			} else {
				$(".left_arrow_div").css({
					"display": "block"
				});
				$(".right_arrow_div").css({
					"display": "block"
				});
			}
		},
		get: function() {
			console.log('get:' + this._value);
			return this._value;
		}
	});

	// 2020-07-26
	$("#goal_20200726").click(function() {
		$(".title").html('<div class="wave loading ">一切的开始</div><br>' +
			'<div class="wave loading">纪念我们那妙不可及的缘分</div><br>');
		$("body").fadeTo("ease", 0.3, function() {
			if (viewport < 960) { // PE
				$(this).css({
					"background": "url(./img/20200726-PC.png) no-repeat fixed center",
					"background-size": "cover"
				});
			} else { // PC
				$(this).css({
					"background": "url(./img/20200726-PC.png) no-repeat fixed",
					"background-size": "cover"
				});
			}
		}).fadeTo('slow', 2);
	});

	// 2020-08-24
	$("#goal_20200824").click(function() {
		$(".title").html('<div class="wave loading ">我们看的第一场电影</div><br>' +
			'<div class="wave loading">你还记得“125军”和“摸头杀”么</div><br>');
		$("body").fadeTo("ease", 0.3, function() {
			if (viewport < 960) { // PE
				$(this).css({
					"background": "url(./img/20200824-PC.png) no-repeat fixed center",
					"background-size": "cover"
				});
			} else { // PC
				$(this).css({
					"background": "url(./img/20200824-PC.png) no-repeat fixed",
					"background-size": "cover"
				});
			}
		}).fadeTo('slow', 2);
	});

	// 2020-09-03
	$("#goal_20200903").click(function() {
		$(".title").html('<div class="wave loading ">hhhhh</div><br>' +
			'<div class="wave loading ">第一次完美踩雷的“投喂”</div><br>');
		$("body").fadeTo("ease", 0.3, function() {
			if (viewport < 960) { // PE
				$(this).css({
					"background": "url(./img/20200903-PC.png) no-repeat fixed center",
					"background-size": "cover"
				});
			} else { // PC
				$(this).css({
					"background": "url(./img/20200903-PC.png) no-repeat fixed",
					"background-size": "cover"
				});
			}
		}).fadeTo('slow', 2);
	});

	// 2020-09-05
	$("#goal_20200905").click(function() {
		$(".title").html('<div class="wave loading ">The first day</div><br>' +
			'<div class="wave loading">还记得那天的故事么</div><br>');
		$("body").fadeTo("ease", 0.3, function() {
			if (viewport < 960) { // PE
				$(this).css({
					"background": "url(./img/20200905-PC.png) no-repeat fixed center",
					"background-size": "cover"
				});
			} else { // PC
				$(this).css({
					"background": "url(./img/20200905-PC.png) no-repeat fixed",
					"background-size": "cover"
				});
			}
		}).fadeTo('slow', 2);
	});

	// 2020-09-20
	$("#goal_20200920").click(function() {
		$(".title").html('<div class="wave loading ">我们官宣的故事你还记得么？</div><br>' +
			'<div class="wave loading">第一次暴躁的“护短”</div><br>' +
			'<div class="wave loading">晚风与我们</div><br>');
		$("body").fadeTo("ease", 0.3, function() {
			if (viewport < 960) { // PE
				$(this).css({
					"background": "url(./img/20200920-PC.png) no-repeat fixed center",
					"background-size": "cover"
				});
			} else { // PC
				$(this).css({
					"background": "url(./img/20200920-PC.png) no-repeat fixed",
					"background-size": "cover"
				});
			}
		}).fadeTo('slow', 2);
	});

	// 2020-10-03
	$("#goal_20201003").click(function() {
		$(".title").html('<div class="wave loading ">我们的第一次旅行</div><br>' +
			'<div class="wave loading">阿那亚的海风与日出</div><br>' +
			'<div class="wave loading">你还记得吗？</div><br>');
		$("body").fadeTo("ease", 0.3, function() {
			if (viewport < 960) { // PE
				$(this).css({
					"background": "url(./img/20201003-PC.png) no-repeat fixed center",
					"background-size": "cover"
				});
			} else { // PC
				$(this).css({
					"background": "url(./img/20201003-PC.png) no-repeat fixed",
					"background-size": "cover"
				});
			}
		}).fadeTo('slow', 2);
	});

	// 2020-11-14
	$("#goal_20201114").click(function() {
		$(".title").html('<div class="wave loading ">陪你度过的第一个生日</div><br>' +
			'<div class="wave loading">“成为网红第一步”</div><br>');
		$("body").fadeTo("ease", 0.3, function() {
			if (viewport < 960) { // PE
				$(this).css({
					"background": "url(./img/20201114-PC.png) no-repeat fixed center",
					"background-size": "cover"
				});
			} else { // PC
				$(this).css({
					"background": "url(./img/20201114-PC.png) no-repeat fixed",
					"background-size": "cover"
				});
			}
		}).fadeTo('slow', 2);
	});

	// 2021-01-01
	$("#goal_20210101").click(function() {
		$(".title").html('<div class="wave loading ">我们的第一次跨年</div><br>' +
			'<div class="wave loading">“一起看的第一场演唱会”</div><br>');
		$("body").fadeTo("ease", 0.3, function() {
			if (viewport < 960) { // PE
				$(this).css({
					"background": "url(./img/20210101-PC.png) no-repeat fixed center",
					"background-size": "cover"
				});
			} else { // PC
				$(this).css({
					"background": "url(./img/20210101-PC.png) no-repeat fixed",
					"background-size": "cover"
				});
			}
		}).fadeTo('slow', 2);
	});

	// 2021-02-02
	$("#goal_20210202").click(function() {
		$(".title").html('<div class="wave loading ">第一次滑雪</div><br>' +
			'<div class="wave loading">“也是你第一次来到我生活的地方”</div><br>');
		$("body").fadeTo("ease", 0.3, function() {
			if (viewport < 960) { // PE
				$(this).css({
					"background": "url(./img/20210202-PC.png) no-repeat fixed center",
					"background-size": "cover"
				});
			} else { // PC
				$(this).css({
					"background": "url(./img/20210202-PC.png) no-repeat fixed",
					"background-size": "cover"
				});
			}
		}).fadeTo('slow', 2);
	});

	// 2021-02-14
	$("#goal_20210214").click(function() {
		$(".title").html('<div class="wave loading ">第一个情人节</div><br>' +
			'<div class="wave loading">“Hakuna Matata”</div><br>');
		$("body").fadeTo("ease", 0.3, function() {
			if (viewport < 960) { // PE
				$(this).css({
					"background": "url(./img/20210214-PC.png) no-repeat fixed center",
					"background-size": "cover"
				});
			} else { // PC
				$(this).css({
					"background": "url(./img/20210214-PC.png) no-repeat fixed",
					"background-size": "cover"
				});
			}
		}).fadeTo('slow', 2);
	});

	// 2021-04-08
	$("#goal_20210408").click(function() {
		$(".title").html('<div class="wave loading ">陪我度过的第一个生日</div><br>' +
			'<div class="wave loading">我爱你，胜过朝夕</div><br>');
		$("body").fadeTo("ease", 0.3, function() {
			if (viewport < 960) { // PE
				$(this).css({
					"background": "url(./img/20210408-PC.png) no-repeat fixed center",
					"background-size": "cover"
				});
			} else { // PC
				$(this).css({
					"background": "url(./img/20210408-PC.png) no-repeat fixed",
					"background-size": "cover"
				});
			}
		}).fadeTo('slow', 2);
	});

	// 2021-05-20
	$("#goal_20210520").click(function() {
		$(".title").html('<div class="wave loading ">第一个520</div><br>' +
			'<div class="wave loading">星河滚烫，你是人间理想</div><br>');
		$("body").fadeTo("ease", 0.3, function() {
			if (viewport < 960) { // PE
				$(this).css({
					"background": "url(./img/20210520-PC.png) no-repeat fixed center",
					"background-size": "cover"
				});
			} else { // PC
				$(this).css({
					"background": "url(./img/20210520-PC.png) no-repeat fixed",
					"background-size": "cover"
				});
			}
		}).fadeTo('slow', 2);
	});

	// 2021-06-26
	$("#goal_20210626").click(function() {
		$(".title").html('<div class="wave loading ">第一次陪你毕业</div><br>' +
			'<div class="wave loading">我也终于享受了一次毕业</div><br>' +
			'<div class="wave loading ">我们毕业啦</div><br>');
		$("body").fadeTo("ease", 0.3, function() {
			if (viewport < 960) { // PE
				$(this).css({
					"background": "url(./img/20210626-PC.png) no-repeat fixed center",
					"background-size": "cover"
				});
			} else { // PC
				$(this).css({
					"background": "url(./img/20210626-PC.png) no-repeat fixed",
					"background-size": "cover"
				});
			}
		}).fadeTo('slow', 2);
	});

	// 2021-08-14
	$("#goal_20210814").click(function() {
		$(".title").html('<div class="wave loading ">度过我们的第一个七夕</div><br>' +
			'<div class="wave loading">也是我第一次收到了“花”</div><br>');
		$("body").fadeTo("ease", 0.3, function() {
			if (viewport < 960) { // PE
				$(this).css({
					"background": "url(./img/20210814-PC.png) no-repeat fixed center",
					"background-size": "cover"
				});
			} else { // PC
				$(this).css({
					"background": "url(./img/20210814-PC.png) no-repeat fixed",
					"background-size": "cover"
				});
			}
		}).fadeTo('slow', 2);
	});

	// 2021-09-05
	$("#goal_20210905").click(function() {
		$(".title").html('<div class="wave loading ">我们一周年啦！！！</div><br>' +
			'<div class="wave loading">感谢我们的双向奔赴</div><br>');
		$("body").fadeTo("ease", 0.3, function() {
			if (viewport < 960) { // PE
				$(this).css({
					"background": "url(./img/20210905-PC.png) no-repeat fixed center",
					"background-size": "cover"
				});
			} else { // PC
				$(this).css({
					"background": "url(./img/20210905-PC.png) no-repeat fixed",
					"background-size": "cover"
				});
			}
		}).fadeTo('slow', 2);
	});

	// 2021-11-20
	$("#goal_20211120").click(function() {
		$(".title").html('<div class="wave loading ">你第一次来到武汉</div><br>' +
			'<div class="wave loading ">同时我们又度过了</div><br>' +
			'<div class="wave loading">好多生日中的第二个生日</div><br>');
		$("body").fadeTo("ease", 0.3, function() {
			if (viewport < 960) { // PE
				$(this).css({
					"background": "url(./img/20211120-PC.png) no-repeat fixed center",
					"background-size": "cover"
				});
			} else { // PC
				$(this).css({
					"background": "url(./img/20211120-PC.png) no-repeat fixed",
					"background-size": "cover"
				});
			}
		}).fadeTo('slow', 2);
	});

	// 2022-01-06
	$("#goal_20220106").click(function() {
		$(".title").html('<div class="wave loading ">我们的第一次“环球之旅”</div><br>' +
			'<div class="wave loading">之后还要一起去好多次哦</div><br>');
		$("body").fadeTo("ease", 0.3, function() {
			if (viewport < 960) { // PE
				$(this).css({
					"background": "url(./img/20220106-PC.png) no-repeat fixed center",
					"background-size": "cover"
				});
			} else { // PC
				$(this).css({
					"background": "url(./img/20220106-PC.png) no-repeat fixed",
					"background-size": "cover"
				});
			}
		}).fadeTo('slow', 2);
	});

	// 2022-01-23
	$("#goal_20220123").click(function() {
		$(".title").html('<div class="wave loading ">第一个密室</div><br>' +
			'<div class="wave loading">“看，那里有个大冤种”</div><br>');
		$("body").fadeTo("ease", 0.3, function() {
			if (viewport < 960) { // PE
				$(this).css({
					"background": "url(./img/20220123-PC.png) no-repeat fixed center",
					"background-size": "cover"
				});
			} else { // PC
				$(this).css({
					"background": "url(./img/20220123-PC.png) no-repeat fixed",
					"background-size": "cover"
				});
			}
		}).fadeTo('slow', 2);
	});

	// 2022-07-16
	$("#goal_20220716").click(function() {
		$(".title").html('<div class="wave loading ">真正意义上的第一次“惊喜”</div><br>');
		$("body").fadeTo("ease", 0.3, function() {
			if (viewport < 960) { // PE
				$(this).css({
					"background": "url(./img/20220716-PC.png) no-repeat fixed center",
					"background-size": "cover"
				});
			} else { // PC
				$(this).css({
					"background": "url(./img/20220716-PC.png) no-repeat fixed",
					"background-size": "cover"
				});
			}
		}).fadeTo('slow', 2);
	});

	// 2022-09-05
	$("#goal_20220905").click(function() {
		$(".title").html('<div class="wave loading">两周年</div><br>' +
			'<div class="wave loading">我亲爱的张维肖女士</div><br>' +
			'<div class="wave loading">我们拥有无数的第一次</div><br>' +
			'<div class="wave loading">还会有更多的第一次</div><br>' +
			'<div class="wave loading">请握紧我的手</div><br>' +
			'<div class="wave loading">坚定地迈向未来</div><br>');

		$("body").fadeTo("ease", 0.3, function() {
			if (viewport < 960) { // PE
				$(this).css({
					"background": "url(./img/20220905-PC.png) no-repeat fixed center",
					"background-size": "cover"
				});
			} else { // PC
				$(this).css({
					"background": "url(./img/20220905-PC.png) no-repeat fixed",
					"background-size": "cover"
				});
			}
		}).fadeTo('slow', 2);
	});

});

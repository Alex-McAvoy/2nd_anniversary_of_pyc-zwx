var app = angular.module('app', []);

app.controller('HomeController', function($scope) {

	$scope.goal_title = "嫖总嫖娼日记";

	//图标显示
	$scope.goal_20200726 = true;
	$scope.goal_20200824 = true;

});

$(document).ready(function(e) {
	var viewport = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	console.log(viewport);


	$('a').click(function(e) {
		e.preventDefault()
	})

	$('.goal_wrap').click(function() {
		var diff = $(this).parent()[0].offsetLeft;
		$('.date .goal_wrap').removeClass('active bounce');
		$(this).addClass('active bounce');
		console.log(diff);
		console.log((viewport - diff));
		TweenLite.to($('.date').parent(), 1, {
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
				"background": "url(./img/20200726.jpg) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});
	
	//2020-08-24
	$("#goal_20200824").click(function() {
		$("body").fadeTo("ease", 0.3, function() {
			$(this).css({
				"background": "url(./img/20200824.jpg) no-repeat fixed",
				"background-size": "cover"
			});
		}).fadeTo('slow', 2);
	});

});

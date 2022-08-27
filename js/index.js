var app = angular.module('app', []);

app.controller('HomeController', function($scope) {

	$scope.goal_title = "嫖总嫖娼日记";
	
    //图标显示
	$scope.goal_leaf_20200726 = true;
	
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

	$('#goal_building_20200726').click(function() {
		console.log('goal click');
		$('body').fadeTo('ease', 0.3, function() {
			$(this).css('background-image',
				'url(../img/20200726.jpg)'
			);
		}).fadeTo('slow', 1);

	});
	
	// $('#goal_graduation_20200726').click(function() {
	// 	// console.log('goal click');
	// 	$('body').fadeTo('ease', 0.3, function() {
	// 		$(this).css('background-image',
	// 			'url(../img/20200726.jpg)');
	// 	}).fadeTo('slow', 1);
	// });

	$('#goal_leaf_20200726').click(function() {
		// console.log('goal click');
		$('body').fadeTo('ease', 0.3, function() {
			$(this).css('background-image',
				'url()'
			);
		}).fadeTo('slow', 1);
	});
	
	// $('#goal_graduation_20220823').click(function() {
	// 	// console.log('goal click');
	// 	$('body').fadeTo('ease', 0.3, function() {
	// 		$(this).css('background-image',
	// 			'url(https://placeimg.com/804/804/nature)');
	// 	}).fadeTo('slow', 1);
	// });

	


});

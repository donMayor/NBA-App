angular.module('ionicApp',['ionic','ionic.contrib.drawer'])
.config(function($stateProvider,$urlRouterProvider){

	$stateProvider.state('menu',{
		url : '/menu',
		templateUrl: 'templates/menu.html',
	}).state('login', {
	      url: '/login',
	      templateUrl: 'templates/login.html',
	  })


	$urlRouterProvider.otherwise('/menu');
	
})


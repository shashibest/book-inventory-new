'use strict';
// Dashboard:Declare this app level module which depends on views, and components
angular.module('myApp.Dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Dashboard', {
    templateUrl: 'assets/pages/Dashboard.html',
    controller: 'DashboardCtrl'
  });
}])


.controller('DashboardCtrl', ['$scope','$rootScope', 'MetaService','USERSERVICE','$location', function($scope, $rootScope, MetaService, USERSERVICE, $location) {
	// Configure Meta Tags and Title
	$scope.templates =[{ name: 'Dashboard.html', url: 'assets/pages/Dashboard.html'}];
	$scope.template = $scope.templates[0];
	$rootScope.metaservice = MetaService;
    $rootScope.metaservice.set("Dashboard | angular-seed","desc","home bookinventory");


    $rootScope.UserData = USERSERVICE.getUser();
   // console.log(typeof $rootScope.UserData.userName);
  	if($rootScope.UserData.userName == undefined){
  		$location.path('/login');
  	}
}]);
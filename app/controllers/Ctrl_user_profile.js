'use strict';
// Dashboard:Declare this app level module which depends on views, and components
angular.module('myApp.user-profile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/user-profile', {
    templateUrl: 'assets/pages/user-profile.html',
    controller: 'userProfileCtrl'
  });
}])


.controller('userProfileCtrl', ['$scope','$rootScope', 'MetaService','USERSERVICE','$location', function($scope, $rootScope, MetaService, USERSERVICE, $location) {
	// Configure Meta Tags and Title
	
	$rootScope.metaservice = MetaService;
    $rootScope.metaservice.set("User Profile | angular-seed","desc","home bookinventory");


    $rootScope.UserData = USERSERVICE.getUser();
   // console.log(typeof $rootScope.UserData.userName);
  	if($rootScope.UserData.userName == undefined){
  		$location.path('/login');
  	}
}]);
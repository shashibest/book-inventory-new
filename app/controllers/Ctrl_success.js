'use strict';

angular.module('myApp.success', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/success', {    
    templateUrl: 'assets/pages/success.html',
    controller: 'successCtrl'
  });
}])

.controller('successCtrl', ['$scope','$rootScope', 'MetaService','USERSERVICE','$location', '$http', function($scope, $rootScope, MetaService, USERSERVICE, $location, $http) {
	// Configure Meta Tags and Title	
	$rootScope.metaservice = MetaService;
    $rootScope.metaservice.set("sell book | angular-seed","desc","blah blah");	
	
	$rootScope.UserData = USERSERVICE.getUser();    
  	if($rootScope.UserData.userName == undefined){
  		$location.path('/login');
    }
	
	
	$scope.msg='success fully sell';
	console.log($scope.msg);
  

}]);
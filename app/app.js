'use strict';

const SERVERAPI = "https://fierce-hollows-55761.herokuapp.com/";
const TIMEOUT = 15000;
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'metaservice',
  'USERSERVICE',
  'myApp.view1',
  'myApp.view2',
  'myApp.login',
  'myApp.forgatepwd',
  'myApp.Dashboard',
  'myApp.signup',
  'myApp.book-check',
  'myApp.booklist',
  'myApp.scanner',
  'myApp.search-book',
  'myApp.selectbook',
  'myApp.success',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/login'});
}])
.run([ '$rootScope', '$location', '$anchorScroll', 'USERSERVICE',function( $rootScope, $location, $anchorScroll, USERSERVICE) {
  $rootScope.$on("$locationChangeSuccess", function(){
    $anchorScroll();
  });
  
}])

.controller('MainCtrl', ['$scope','USERSERVICE','$location','$rootScope', function($scope, USERSERVICE, $location, $rootScope){
    $scope.logout = function(){
      USERSERVICE.dropUser();
      $rootScope.UserData = USERSERVICE.getUser();
      $location.path('/login');
    };
}])
;








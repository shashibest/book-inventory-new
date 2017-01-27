'use strict';

angular.module('myApp.booklist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/booklist', {
    templateUrl: 'assets/pages/booklist.html',
    controller: 'booklistCtrl'
  });
}])

.controller('booklistCtrl', [function() {

}]);
'use strict';

angular.module('myApp.book-check', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/book-check', {
    templateUrl: 'assets/pages/book-check.html',
    controller: 'book-checkCtrl'
  });
}])

.controller('book-checkCtrl', [function() {

}]);
'use strict';

angular.module('myApp.search-book', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search-book', {
    templateUrl: 'assets/pages/search-book.html',
    controller: 'search-bookCtrl'
  });
}])

.controller('search-bookCtrl', [function() {

}]);
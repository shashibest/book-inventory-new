'use strict';

angular.module('myApp.selectbook', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/selectbook', {
    templateUrl: 'assets/pages/selectbook.html',
    controller: 'selectbookCtrl'
  });
}])

.controller('selectbookCtrl', [function() {

}]);
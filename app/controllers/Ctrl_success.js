'use strict';

angular.module('myApp.success', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/success', {
    templateUrl: 'assets/pages/success.html',
    controller: 'successCtrl'
  });
}])

.controller('successCtrl', [function() {

}]);
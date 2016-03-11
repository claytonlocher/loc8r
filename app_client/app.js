'use strict';

angular.module('loc8rApp', ['ngRoute']);

function config($routeProvider) {
  $routeProvider
    .when('/', {
    })
    .otherwise({
      redirectTo: '/'
    });
}

angular.module('loc8rApp')
  .config(['$routeProvider', config]);

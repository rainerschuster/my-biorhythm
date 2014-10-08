'use strict';

/**
 * @ngdoc overview
 * @name myBiorhythmApp
 * @description
 * # myBiorhythmApp
 *
 * Main module of the application.
 */
angular
  .module('myBiorhythmApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'angular-flot'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/impressum', {
        templateUrl: 'views/impressum.html',
        controller: 'ImpressumCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

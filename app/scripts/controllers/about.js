'use strict';

/**
 * @ngdoc function
 * @name myBiorhythmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myBiorhythmApp
 */
angular.module('myBiorhythmApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

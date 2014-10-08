'use strict';

describe('Controller: FlotCtrl', function () {

  // load the controller's module
  beforeEach(module('myBiorhythmApp'));

  var FlotCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FlotCtrl = $controller('FlotCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

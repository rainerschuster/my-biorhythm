'use strict';

describe('Controller: ImpressumCtrl', function () {

  // load the controller's module
  beforeEach(module('myBiorhythmApp'));

  var ImpressumCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ImpressumCtrl = $controller('ImpressumCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

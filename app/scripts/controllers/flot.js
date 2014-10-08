'use strict';

/**
 * @ngdoc function
 * @name myBiorhythmApp.controller:FlotCtrl
 * @description
 * # FlotCtrl
 * Controller of the myBiorhythmApp
 */
angular.module('myBiorhythmApp')
  .controller('FlotCtrl', function ($scope) {
    $scope.first = true;
    $scope.myData = [];
    $scope.myChartOptions = {
      legend:{position:'nw'},
      xaxis: {
        mode: 'time',
        minTickSize: [1, 'day'],
        // min: $scope.dt.getTime(),
        // max: (new Date(2020, 0, 1)).getTime(),
		zoomRange: [0.1, 3600000000000],
		panRange: [-10, 3600000000000]
      },
      yaxis: { 
//        transform: function (v) { return Math.sin(v); },
//        inverseTransform: function (v) { return Math.arcsin(v); },
        zoomRange: [2, 2], 
        panRange: [-1.0, 1.0]
      },
        zoom: {
            interactive: true
        },
        pan: {
            interactive: true
        }
    };
    function getData(startDate, dayRhythm) {
      var temp = [];
	  var dayConstant = 24 * 60 * 60 * 1000;
	  var now = (new Date()).getTime();
	  var currentDate = null;
	  var t = 0;
	  if (startDate.getTime() <= now) {
        while (currentDate == null || currentDate.getTime() <= now) {
	      currentDate = new Date(startDate.getTime() + (t * dayConstant));
          temp.push([currentDate, Math.sin((2 * Math.PI * t) / dayRhythm)]);
		  t += 1;
        }
	  }
	  // Calculate 1000 days into the future
	  for (var u = 1000; u > 0; u--) {
	    currentDate = new Date(startDate.getTime() + (t * dayConstant));
        temp.push([currentDate, Math.sin((2 * Math.PI * t) / dayRhythm)]);
		t += 1;
      }

      return temp;
    };
    function myPan(startDate) {
      var points = plot.getData()[0];
	  var point = myPoint(startDate);
	  var result = points.xaxis.p2c(point[0]);
	  return result;
    };
	function myPoint(startDate) {
	  var now = (new Date()).getTime();
	  var points = plot.getData()[0];
	  var result = null;
	  var targetDate = startDate;
	  if (startDate.getTime() <= now) {
	    targetDate = now;
	  }
	  for (var m = 0; m < points.data.length; m++) {
	    if (points.data[m][0] <= targetDate) {
		  result = points.data[m];
		} else {
		  return result;
		}
	  }
	  return null;
	};
    function getMyData(startDate) {
      return [
      { data:getData(startDate, 23), label:'physical', xaxis: { min: startDate }},
      { data:getData(startDate, 28), label:'emotional', xaxis: { min: startDate }},
      { data:getData(startDate, 33), label:'intellectual', xaxis: { min: startDate }}];
    };
    $scope.update = function(startDate) {
	  // Reset time to last midnight
	  startDate.setUTCHours(0,0,0,0);
	  // startDate.setHours(0,0,0,0);
      $scope.first = false;
      $scope.myData = getMyData(startDate);
      plot.setData($scope.myData);
	  plot.zoomOut({ amount: 200 });
      plot.zoom({ amount: 200 });
	  plot.pan({ left: myPan(startDate) - (plot.width() / 2)});
	  plot.draw();
    };
    var plot = $.plot($('#myChart'), getMyData($scope.dt), $scope.myChartOptions);
  });

"use strict";angular.module("myBiorhythmApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap","angular-flot"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/impressum",{templateUrl:"views/impressum.html",controller:"ImpressumCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("myBiorhythmApp").controller("MainCtrl",["$scope",function(a){a.today=function(){a.dt=new Date},a.today(),a.clear=function(){a.dt=null},a.disabled=function(){return!1},a.toggleMin=function(){a.minDate=a.minDate?null:new Date},a.toggleMin(),a.open=function(b){b.preventDefault(),b.stopPropagation(),a.opened=!0},a.dateOptions={formatYear:"yy",startingDay:1},a.formats=["dd-MMMM-yyyy","yyyy/MM/dd","dd.MM.yyyy","shortDate"],a.format=a.formats[3]}]),angular.module("myBiorhythmApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("myBiorhythmApp").controller("FlotCtrl",["$scope",function(a){function b(a,b){var c=[],d=864e5,e=(new Date).getTime(),f=null,g=0;if(a.getTime()<=e)for(;null==f||f.getTime()<=e;)f=new Date(a.getTime()+g*d),c.push([f,Math.sin(2*Math.PI*g/b)]),g+=1;for(var h=1e3;h>0;h--)f=new Date(a.getTime()+g*d),c.push([f,Math.sin(2*Math.PI*g/b)]),g+=1;return c}function c(a){var b=f.getData()[0],c=d(a),e=b.xaxis.p2c(c[0]);return e}function d(a){var b=(new Date).getTime(),c=f.getData()[0],d=null,e=a;a.getTime()<=b&&(e=b);for(var g=0;g<c.data.length;g++){if(!(c.data[g][0]<=e))return d;d=c.data[g]}return null}function e(a){return[{data:b(a,23),label:"physical",xaxis:{min:a}},{data:b(a,28),label:"emotional",xaxis:{min:a}},{data:b(a,33),label:"intellectual",xaxis:{min:a}}]}a.first=!0,a.myData=[],a.myChartOptions={legend:{position:"nw"},xaxis:{mode:"time",minTickSize:[1,"day"],zoomRange:[.1,36e11],panRange:[-10,36e11]},yaxis:{zoomRange:[2,2],panRange:[-1,1]},zoom:{interactive:!0},pan:{interactive:!0}},a.update=function(b){b.setUTCHours(0,0,0,0),a.first=!1,a.myData=e(b),f.setData(a.myData),f.zoomOut({amount:200}),f.zoom({amount:200}),f.pan({left:c(b)-f.width()/2}),f.draw()};var f=$.plot($("#myChart"),e(a.dt),a.myChartOptions)}]),angular.module("myBiorhythmApp").controller("ImpressumCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);
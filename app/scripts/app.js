'use strict';

/**
 * @ngdoc overview
 * @name sampleProjectApp
 * @description
 * # sampleProjectApp
 *
 * Main module of the application.
 */
angular
  .module('sampleProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'chart.js'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/summary.html',
        controller: 'SummaryCtrl',
        resolve:{
          summary: function(remoteCall){
            return  remoteCall.get('data/data.json',{});
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });

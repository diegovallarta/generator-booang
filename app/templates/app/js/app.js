'use strict';

angular.module('<%= _.camelize(appname)%>', ['ngRoute'])
  .config(['$routeProvider', function (routeProvider) {
    routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

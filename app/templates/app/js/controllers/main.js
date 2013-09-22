'use strict';

angular.module('<%= _.camelize(appname)%>')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.title = '<%= _.camelize(appname)%>';
  });

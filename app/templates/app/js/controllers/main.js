'use strict';

angular.module('<%= _.camelize(appname)%>')
.controller('MainCtrl', ['$scope', function (scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',<% if(jquery) {%>
			'Bootstrap',
			'JQuery',<% } %>
			'Karma'
		];

		$scope.title = '<%= _.camelize(appname)%>';
}]);

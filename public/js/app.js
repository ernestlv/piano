var videoApp = angular.module("videoApp", [
		'ngRoute'
]);

videoApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	    when('/', {
	    	templateUrl:'/components/videoList.html',
	    	controller: 'videoListCtrl'
	    }).
	    when('/create', {
			templateUrl:'/components/createForm.html',
			controller: 'createCtrl'
		}).
		when('/update', {
			templateUrl:'/components/updateForm.html',
			controller: 'updateCtrl'
		}).
		when('/delete', {
			templateUrl:'/components/deleteButton.html',
			controller: 'deleteCtrl'
		}).
		otherwise({
			redirectTo: "/"
		});
}]);

videoApp.directive('myHolder', function() {
  return {
    link: function(scope, element, attrs) {
      attrs.$set('data-src', attrs.myHolder);
      Holder.run({images:element[0], nocss:true});
    }
  };
});

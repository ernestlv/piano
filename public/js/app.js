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
		otherwise({
			redirectTo: "/"
		});
}]);

videoApp.directive('myHolder', function() { //hooks angular and holder.js
  return {
    link: function(scope, element, attrs) {
      attrs.$set('data-src', attrs.myHolder);
      Holder.run({images:element[0], nocss:true});
    }
  };
});

videoApp.controller('updateCtrl', function ($scope, $http, updateService, reloadService) {
	$scope.$watch(function () { return updateService.getVideo(); }, function ( video ) { //watch updateService to get video info
		if (!video) { return; }
		$scope.id = video.id;
		$scope.title = video.title;
        $scope.description = video.description;
        $scope.sortOrder = video.sortOrder;
        $scope.publishedDate = video.publishedDate;
    });
    
    $scope.saveChanges = function(){
    	var payload = {
     		title: $scope.title,
     		description: $scope.description,
     		sortOrder: $scope.sortOrder,
     		publishedDate: $scope.publishedDate,
     		coverImage: 'holder.js/50x50?auto=yes&textmode=exact'
     	};
    	$http.put('/video/'+$scope.id, payload).success(function(){
    		console.log($scope.id, 'updated');
    		reloadService.updateStatus(); //trigger video list update
    	});
    };
});
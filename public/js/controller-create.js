//creates a new video
videoApp.controller('createCtrl', function ($scope, $http, reloadService) {
    
    $scope.saveChanges = function(){
    	var id = Math.random() * 100 | 0; //generate id
    	var payload = {
    		id: id,
     		title: $scope.title,
     		description: $scope.description,
     		sortOrder: $scope.sortOrder,
     		publishedDate: $scope.publishedDate,
     		coverImage: 'holder.js/50x50?auto=yes&textmode=exact'
     	};
    	$http.post('/video', payload).success(function(){
    		console.log(id, 'created');
    		reloadService.updateStatus(); //trigger video list update
    	});
    };
});

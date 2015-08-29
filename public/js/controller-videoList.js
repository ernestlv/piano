//define methods to process a list of videos
videoApp.controller('videoListCtrl', function ($scope, $http, updateService, deleteService, reloadService) {
	function loadVideoList(){
		$http.get('/videos').success(function(videos){
			$scope.videos = videos;
		});
	}

	$scope.createVideo = function(){
    	location = "#/create"
    };

	$scope.clickDetailLink = function(video){
		updateService.setVideo(video); //we send video to update
		return false;
	};

	$scope.clickDeleteLink = function(video){
		$('#delete-modal').openModal();
		deleteService.setVideo(video); //we send video to delete 
		return false;
	};

	$scope.deleteVideo = function(){ //service call
		$('#delete-modal').closeModal();
    	var video = deleteService.getVideo();
    	$http.delete('/video/'+video.id).success(function(){
			console.log(video.id, 'deleted');
			loadVideoList();
		});
    };

	$scope.$watch(function () { return reloadService.getStatus(); }, function () { //watch reloadService for video updates
		loadVideoList();
    });

	loadVideoList();
});

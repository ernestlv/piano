videoApp.factory('updateService', function(){ //capture video object to be updated
	var video = null;
	return {
		getVideo: function(){
			return video;
		},
		setVideo: function(data){
			video = data;
		}
	};
});

videoApp.factory('deleteService', function(){ //capture video object to be deleted
	var video = null;
	return {
		getVideo: function(){
			return video;
		},
		setVideo: function(data){
			video = data;
		}
	};
});

videoApp.factory('reloadService', function(){ //capture video object to be deleted
	var count = 0;
	return {
		getStatus: function(){
			return count;
		},
		updateStatus: function(){
			count++;
		}
	};
});

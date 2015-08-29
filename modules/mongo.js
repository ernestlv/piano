var mongoDB = require("mongodb");
var mongo = {};

mongoDB.MongoClient.connect('mongodb://localhost:27017/piano', function(err, db){
	if(err) { return console.dir(err); }

	mongo.getVideoList = function(responseCallback){
			var videos = db.collection('videos');
			videos.find().toArray(function(err, items){
				if (err){ responseCallback(err); }
				responseCallback(items);
			});
	};

	mongo.getVideo = function(id, responseCallback){
			var videos = db.collection('videos');
			videos.findOne({id:(id-0)}, function(err, item){
				if (err){ responseCallback(err); }
				responseCallback(item);
			});
	};

	mongo.removeVideo = function(id, responseCallback){
		var videos = db.collection('videos');
		videos.remove({id: id}, {w:1}, function(err, result){
			if (err){ console.log(err); }
			responseCallback(result);
		});
	};

	mongo.insertVideo = function(video, responseCallback){
		var videos = db.collection('videos');
		videos.insert(video, {w:1}, function(err, result){
			if (err){ console.log(err); }
			responseCallback(result);
		});
	};

	mongo.updateVideo = function(video, responseCallback){
		var videos = db.collection('videos');
		videos.remove({id: video.id}, {w:1}, function(err, result){
			videos.insert(video, {w:1}, function(err, result){
				if (err){ console.log(err); }
				responseCallback(result);
			});
		});
	};
});

exports = module.exports = mongo;
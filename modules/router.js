var qs = require("querystring");
var mongo = require("./mongo");

//RESTFUL SERVICES
exports = module.exports = function (router){
	router.get('/videos', function(req, res, next){
		mongo.getVideoList(function(videos){
			console.log('processing: /', videos);
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify(videos));
		});
	});

	router.get('/video/:id', function(req, res, next){
		var id = req.params.id
		mongo.getVideo(id, function(video){
			console.log('processing: /id', video);
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify(video));
		});
	});

	router.post('/video', function(req, res, next){
		var data = "";
		req.on('data', function(chunk){
			data += chunk;
		});
		req.on('end', function(){
			var params = JSON.parse(data);
			var video = { 
				id: (params.id-0), 
				title: params.title, 
				publishedDate: params.publishedDate, 
				description: params.description, 
				coverImage: params.coverImage, 
				sortOrder: params.sortOrder
			};
			mongo.insertVideo(video, function(){
				console.log('inserted video', video);
				res.setHeader('Content-Type', 'application/json');
				res.end( '{"status":"done"}');
			});
		});		
	});

	router.put('/video/:id', function(req, res, next){
		var data = "";
		req.on('data', function(chunk){
			data += chunk;
		});
		req.on('end', function(){
			var params = JSON.parse(data);
			var video = { 
				id: (req.params.id-0), 
				title: params.title, 
				publishedDate: params.publishedDate, 
				description: params.description, 
				coverImage: params.coverImage, 
				sortOrder: params.sortOrder
			};
			mongo.updateVideo(video, function(){
				console.log('updated video', video);
				res.setHeader('Content-Type', 'application/json');
				res.end( '{"status":"done"}');
			});
		});
	});

	router.delete('/video/:id', function(req, res, next){
		var id = req.params.id-0;
		mongo.removeVideo(id, function(){
			console.log('deleted video', id);
			res.setHeader('Content-Type', 'application/json');
			res.end( '{"status":"done"}');
		})
	});
}
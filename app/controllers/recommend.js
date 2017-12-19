const Recommend = require('../models/recommend.js');
const _ = require('underscore');
exports.save = function(req, res){
	const _id = req.params.id;
	const recommendInfo = req.body.recommend;

	console.log('recommendInfo')
	console.log(recommendInfo)

	let _recommend;
	if( _id !== undefined ){
		Recommend.findById(_id, function(err, recommend){
			if(err){
				console.log(err)
			}
			_recommend = _.extend(recommend, recommendInfo);
			_recommend.save(function(err, recommend){
				if(err){
					console.log(err)
				}
				return res.json({
					state : 1
				});
			});
		});
	}
	else{
		_recommend = new Recommend(recommendInfo);
		_recommend.save(function(err, recommend){
			if(err){
				console.log(err)
			}
			console.log('recommend');
			console.log(recommend)
			return res.json({
				state : 1
			})
		})
	}
}
exports.list = function(req, res){
		Recommend
			.find()
			.exec(function(err, recommends){
				console.log(recommends)
				return res.json(recommends)
			})
	// Recommend.fetch(function(err, recommends){
	// 	if(err){
	// 		console.log(err)
	// 	}
		
	// 	// recommends
	// 	// 	.populate('movie','title')
	// 	// 	.exec(function(err, recommendInfo){
	// 	// 		if(err){
	// 	// 			console.log(err)
	// 	// 		}
	// 	// 		return res.json(recommendInfo)
	// 	// 	})
	// })
}
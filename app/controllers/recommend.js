var Recommend = require('../models/recommend.js'),
	Movie = require('../models/movie.js');
const _ = require('underscore');
exports.save = function(req, res){
	const _id = req.params.id;
	const recommendInfo = req.body.recommend;

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
			return res.json({
				state : 1
			})
		})
	}
}
exports.list = function(req, res){
	Recommend
		.find({})
		.populate('movie', 'title conutry poster')
		.exec(function(err, recommends){
			if(err){
				console.log(err)
			}
			return res.json(recommends)
		});
}
exports.adminList = function(req, res){
	Recommend
		.find({})
		.populate('movie', 'title conutry poster')
		.exec(function(err, recommends){
			if(err){
				console.log(err)
			}
			return res.json(recommends)
		});
}
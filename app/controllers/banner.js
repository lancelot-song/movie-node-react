let Movie = require('../models/movie');//引入mongoose编译过的数据库模型
let Category = require('../models/category');

exports.indexBanner = function(req,res){
	Movie.fetch(function(err, movie){
		if(err){
			console.log(err);
		}
		res.json(movie)
	})
	// Category
	// 	.find({})
	// 	.populate({ path : 'movies', options : { limit : 2 } })
	// 	.exec(function(err, categories){
	// 		if(err){
	// 			console.log(err);
	// 		}
	// 		res.json(categories);
	// 	});
}
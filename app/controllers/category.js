const Movie = require('../models/movie');
const Category = require('../models/category');

exports.create = function(req, res){
	const _category = req.body.category;
	const category = new Category(_category);

	category.save(function(err, category){
		if(err){
			console.log(err)
		}
		res.json({
			status : 1,
			url : '/admin/movieCategory/list'
		})
	});
}

exports.list = function(req, res){
	Category.fetch(function(err, categories){
		if(err){
			console.log(err)
		}
		res.json(categories);
	})
}
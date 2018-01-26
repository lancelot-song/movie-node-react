let Movie = require('../models/movie');//引入mongoose编译过的数据库模型
let Category = require('../models/category');
let Recommend = require('../models/recommend');
const path = require('path');

exports.all = function(req, res){
	res.sendFile(path.join(__dirname, '../views/','index.html'));
}
exports.list = function(req, res){
	const curPage = req.params.id;
	if(curPage && Number.isNaN( Number(curPage) ) ){
		console.log("???")
		return res.redirect('./notFound404');
	}

	//计算最大页数 12/页
	let moviesNum = 0;
	Movie.count({},function(err, count){
		count > 12 && ( moviesNum = count );
		moviesNum = Math.floor(moviesNum / 12) + 1;
	});

	//如果传了值
	if(curPage){
		Movie
			.find({})
			.skip(curPage*12)
			.limit(curPage*12)
			.exec(function(err, movies){
				if(err){
					console.log(err);
				}
				res.json({
					movies : movies,
					maxPage : moviesNum
				});
			});
	}
	else{
		Movie
			.find({})
			.limit(12)
			.exec(function(err, movies){
				if(err){
					console.log(err);
				}
				res.json({
					movies : movies,
					maxPage : moviesNum
				});
			});
	}
}
exports.banner = function(req,res){
	Recommend.fetch(function(err, recommends){
		if(err){
			console.log(err);
		}
		res.json(recommends)
	});
}
exports.index = function(req, res){
	let username = null;
	if(req.session.user) {
		username = req.session.user.name;
	}

	// Category
	// 	.find({})
	// 	.populate({ path : 'movies', options : { limit : 1 } })
	// 	.exec(function(err, categories){
	// 		if(err){
	// 			console.log(err);
	// 		}
	// 		res.json({
	// 			header : {
	// 				logo : {
	// 					href : "/",
	// 					src : "./images/logo.png"
	// 				},
	// 				nav : [{
	// 					href : "/",
	// 					txt : "首页"
	// 				},{
	// 					href : "/",
	// 					txt : "留言板"
	// 				}],
	// 				user : {
	// 					name : username
	// 				}
	// 			},
	// 			banner : categories
	// 		});

	// 	});
}

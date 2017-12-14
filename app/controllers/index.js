let Movie = require('../models/movie');//引入mongoose编译过的数据库模型
let Category = require('../models/category');
const path = require('path');

exports.all = function(req, res){
	res.sendFile(path.join(__dirname, '../views/','index.html'));
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


var moment = require('moment');//格式化时间

var Index = require('../app/controllers/index'),
	User = require('../app/controllers/user'),
	Movie = require('../app/controllers/movie'),
	Category = require('../app/controllers/category'),
	Comment = require('../app/controllers/comment'),
	Recommend = require('../app/controllers/recommend');


const multer = require('multer');
const upload = multer({ dest : 'uploads/' })

module.exports = function(app){

	//session读写
	app.use(function(req, res, next){
		res.locals.user = req.session.user;
		next();
	});

	//识别用户信息
	app.get('/user/status', User.status);

	//------------------------前台-------------------------------------
	//首页
	app.get('/json/index/banner', Index.banner);
	app.get('/json/index/list', Index.list);
	//电影推荐列表
	app.get('/json/movie/recommend', Recommend.list);



	//-------------------------后台--------------------------------------

	//电影分类
	app.post('/admin/movieCategory/create', upload.array(), Category.create);
	//电影推荐
	app.post('/admin/movieRecommend/save/:id?', upload.array(), Recommend.save);
	app.get('/json/admin/movieRecommend/list', Recommend.adminList);
	//电影
	app.post('/admin/movie/save/:id?', upload.array(), Movie.save);
	app.get('/admin/movie/delete/:id', upload.array(), Movie.delete);
	app.get('/json/admin/movie/edit/:id', Movie.update);
	app.get('/json/admin/movie/list', Movie.list);

	//注册登陆
	app.post('/user/signup', upload.array(), User.signup);
	app.post('/user/signin', upload.array(), User.signin);
	app.post('/user/signout', upload.array(), User.signout);
	
	//app.get('/admin/movie', User.signinRequired, User.adminRequired, Movie.index);
	//app.get('/user/react', User.reactGet);


	app.all('*', Index.all);
}
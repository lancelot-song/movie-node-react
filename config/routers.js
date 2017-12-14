var moment = require('moment');//格式化时间

var Index = require('../app/controllers/index'),
	User = require('../app/controllers/user'),
	Movie = require('../app/controllers/movie'),
	Category = require('../app/controllers/Category'),
	Comment = require('../app/controllers/comment'),
	Banner = require('../app/controllers/banner');


const multer = require('multer');
const upload = multer({ dest : 'uploads/' })

module.exports = function(app){

	app.locals.moment = moment;

	//session读写
	app.use(function(req, res, next){
		res.locals.user = req.session.user;
		next();
	});

	//识别用户信息
	app.get('/user/status', User.status);

	//首页banner
	app.get('/banner/indexBanner', Banner.indexBanner);


	//movie 用户浏览
	app.get('/movie/:id', Movie.detail);
	app.post('/movie/score', Movie.score);
	app.post('/movie/comment', Comment.save);

	//movie 后台

	app.post('/admin/movieCategory/create', upload.array(), Category.create);
	app.get('/json/admin/movie/edit/:id', Movie.update);
	
	app.get('/admin/movie', User.signinRequired, User.adminRequired, Movie.index);
	//app.get('/admin/movie/create', User.signinRequired, User.adminRequired, Movie.create);
	//app.get('/admin/movie/update/:id', User.signinRequired, User.adminRequired, Movie.update);
	//app.post('/admin/movie/create/add', User.signinRequired, User.adminRequired, Movie.createAdd );
	//app.delete('/admin/movie/del', User.signinRequired, User.adminRequired, Movie.del);

	// user 
	//app.get('/signup', upload.array(), User.goSignup);
	//app.get('/signin', User.goSignin);
	app.post('/user/signup', upload.array(), User.signup);
	app.post('/user/signin', upload.array(), User.signin);
	app.post('/user/signout', upload.array(), User.signout);
	app.get('/user/list', User.signinRequired, User.adminRequired, User.list);
	app.delete('/user/del', User.signinRequired, User.adminRequired, User.del);

	app.get('/user/react', User.reactGet);


	app.all('*', Index.all);
}
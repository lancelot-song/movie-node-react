var http = require('http'),
	path = require('path'),
	express = require('express'),
	session = require('express-session'),
	cookieParser = require('cookie-parser'),//调用express session必须的中间件
	MongoStore = require('connect-mongo')(session),//存储session到mongo的中间件
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),//express依赖 用于解析数据格式（JSON/二进制/文本）
	serveStatic = require('serve-static'),//express依赖 用于指定静态资源加载的路径
	morgan = require('morgan'),//开发环境的日志输出工具
	app = express(),
	port = process.env.PORT || 8083;

const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

/* webpack配置 S */

require('core-js/fn/object/assign');
const webpack = require('webpack');
//const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

/* webpack配置 E */


var dburl = 'mongodb://127.0.0.1:27017/imooc';

mongoose.Promise = global.Promise;
mongoose.connect(dburl,{
  useMongoClient: true
});

// app.set('views','./app/views');//设置views根目录
// app.set('view engine','ejs');//设置模板引擎
//app.use(express.static(path.join(__dirname, '/app/views')));
app.use(bodyParser.urlencoded({ extended: true }));//设置express中间件，对数据格式文本化
app.use(serveStatic('public'));
app.use(cookieParser());
app.use(session({
	secret : 'lszh react secret ',
	key : 'lszhReact',
    resave: false,
    saveUninitialized: true,
	store : new MongoStore({
		url : dburl,
		collection : 'sessions'
	})
}));

if(app.get('env') === 'development'){//开发环境配置 便于调试
	app.set('showStackError', true);//打印错误信息
	app.use(morgan(':method :url :status'));
	app.locals.pretty = true;//代码美化
	mongoose.set('debug', true);
}


/* webpack配置 S */
let isInitialCompilation = true;

const compiler = webpack(config);


app.use(webpackDevMiddleware(compiler, config.devServer));
app.use(webpackHotMiddleware(compiler));

compiler.plugin('done', () => {
  if (isInitialCompilation) {
    // Ensures that we log after webpack printed its stats (is there a better way?)
    setTimeout(() => {
      console.log('\n✓ The bundle is now ready for serving!\n');
      console.log('  Open in iframe mode:\t\x1b[33m%s\x1b[0m',  'http://localhost:' + config.port + '/webpack-dev-server/');
      console.log('  Open in inline mode:\t\x1b[33m%s\x1b[0m', 'http://localhost:' + config.port + '/\n');
      console.log('  \x1b[33mHMR is active\x1b[0m. The bundle will automatically rebuild and live-update on changes.')
    }, 350);
  }
  isInitialCompilation = false;
});

/* webpack配置 E */

//app.listen(port);

app.listen(config.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + config.port);
});

require('./config/routers')(app);//载入路由配置文件
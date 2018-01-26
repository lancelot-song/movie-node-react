require('es6-promise').polyfill();
require('isomorphic-fetch');

/* React */
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, IndexRoute} from 'react-router-dom';

/* 处理React组件按需加载 */
import Bundle from './bundle.js';

/* 公用模板 */
import Main from 'bundle-loader?lazy!./screens/Main';

/* 前台页面 */
import Index from 'bundle-loader?lazy!./screens/public/Index/Index.js';
import Message from 'bundle-loader?lazy!./screens/public/Message/Message.js';
import MovieDetail from 'bundle-loader?lazy!./screens/public/MovieDetail/MovieDetail';

/*后台页面*/
import MovieList from 'bundle-loader?lazy!./screens/admin/Movie/List';
import MovieCreate from 'bundle-loader?lazy!./screens/admin/Movie/Create';
import MovieEdit from 'bundle-loader?lazy!./screens/admin/Movie/Edit';
import MovieRecommendList from 'bundle-loader?lazy!./screens/admin/MovieRecommend/List';
import MovieRecommendCreate from 'bundle-loader?lazy!./screens/admin/MovieRecommend/Create';
// import MovieRecommendList from './screens/admin/MovieRecommend/List';
import MovieCategoryCreate from 'bundle-loader?lazy!./screens/admin/MovieCategory/Create';

export const BMain = (props) => (
    <Bundle load={Main}>
        {(Lists) => <Lists {...props}/>}
    </Bundle>
)
export const BIndex = () => (
    <Bundle load={Index}>
        {(Lists) => <Lists/>}
    </Bundle>
)
export const BMessage = () => (
    <Bundle load={Message}>
        {(Lists) => <Lists/>}
    </Bundle>
)
export const BMovieDetail = () => (
    <Bundle load={MovieDetail}>
        {(Lists) => <Lists/>}
    </Bundle>
)
export const BMovieList = () => (
    <Bundle load={MovieList}>
        {(Lists) => <Lists/>}
    </Bundle>
)
export const BMovieCreate = () => (
    <Bundle load={MovieCreate}>
        {(Lists) => <Lists/>}
    </Bundle>
)
export const BMovieEdit = () => (
    <Bundle load={MovieEdit}>
        {(Lists) => <Lists/>}
    </Bundle>
)
export const BMovieRecommendList = () => (
    <Bundle load={MovieRecommendList}>
        {(Lists) => <Lists/>}
    </Bundle>
)
export const BMovieRecommendCreate = () => (
    <Bundle load={MovieRecommendCreate}>
        {(Lists) => <Lists/>}
    </Bundle>
)
export const BMovieCategoryCreate = () => (
    <Bundle load={MovieCategoryCreate}>
        {(Lists) => <Lists/>}
    </Bundle>
)

// Render the main component into the dom
ReactDOM.render((
	<BrowserRouter>
		<BMain>
            <Route exact path='/' component={BIndex} ></Route>

			<Route path='/message' component={BMessage} />

			<Route path='/admin/movie/list' component={BMovieList} />
			<Route path='/admin/movie/create' component={BMovieCreate} />
			<Route path='/admin/movie/edit/:id' component={BMovieEdit} />

			<Route path='/admin/movieRecommend/list' component={BMovieRecommendList} />
			<Route path='/admin/movieRecommend/create' component={BMovieRecommendCreate} />

			<Route path='/admin/movieCategory/create' component={BMovieCategoryCreate} />

			<Route path='/notFound404' />
			<Route path='*' to='/notFound404' />
		</BMain>
	</BrowserRouter>
), document.getElementById('app'));

//<Route path='/child' component={BChild}  source="http://localhost:8000/" />
//<Route path="*" component={BNotFoundPage} />
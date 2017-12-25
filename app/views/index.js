import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

import Bundle from './bundle.js';

import Main from './screens/Main';


import Index from 'bundle-loader?lazy!./screens/public/Index/Index.js';
import MovieDetail from 'bundle-loader?lazy!./screens/public/MovieDetail/MovieDetail';

/*后台页面*/
import MovieList from 'bundle-loader?lazy!./screens/admin/Movie/List';
import MovieCreate from 'bundle-loader?lazy!./screens/admin/Movie/Create';
import MovieEdit from 'bundle-loader?lazy!./screens/admin/Movie/Edit';
import MovieRecommendList from 'bundle-loader?lazy!./screens/admin/MovieRecommend/List';
import MovieRecommendCreate from 'bundle-loader?lazy!./screens/admin/MovieRecommend/Create';
// import MovieRecommendList from './screens/admin/MovieRecommend/List';
import MovieCategoryCreate from 'bundle-loader?lazy!./screens/admin/MovieCategory/Create';

import { BrowserRouter, Route, IndexRoute} from 'react-router-dom';


export const BIndex = () => (
    <Bundle load={Index}>
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
		<Main>
			<Route exact path='/' component={BIndex} ></Route>

			<Route path='message' component={BIndex} />

			<Route path='/admin/movie/list' component={BMovieList} />
			<Route path='/admin/movie/create' component={BMovieCreate} />
			<Route path='/admin/movie/edit/:id' component={BMovieEdit} />

			<Route path='/admin/movieRecommend/list' component={BMovieRecommendList} />
			<Route path='/admin/movieRecommend/create' component={BMovieRecommendCreate} />

			<Route path='/admin/movieCategory/create' component={BMovieCategoryCreate} />

			<Route path='/notFound404' />
			<Route path='*' to='/notFound404' />
		</Main>
	</BrowserRouter>
), document.getElementById('app'));

//<Route path='/child' component={BChild}  source="http://localhost:8000/" />
//<Route path="*" component={BNotFoundPage} />
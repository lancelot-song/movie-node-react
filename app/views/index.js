import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './screens/Main';
import Index from './screens/public/Index/Index.js';
import MovieDetail from './screens/public/MovieDetail/MovieDetail';

/*后台页面*/
import MovieList from './screens/admin/Movie/List';
import MovieCreate from './screens/admin/Movie/Create';
import MovieEdit from './screens/admin/Movie/Edit';
import MovieCategoryCreate from './screens/admin/MovieCategory/Create';

import { BrowserRouter, Route, IndexRoute} from 'react-router-dom'

// Render the main component into the dom
ReactDOM.render((
	<BrowserRouter>
		<Main>
			<Route exact path='/' component={Index} ></Route>

			<Route path='message' component={Index} />

			<Route path='/admin/movie/list' component={MovieList} />
			<Route path='/admin/movie/create' component={MovieCreate} />
			<Route path='/admin/movie/edit/:id' component={MovieEdit} />

			<Route path='/admin/movieCategory/create' component={MovieCategoryCreate} />

			<Route path='/notFound404' />
			<Route path='*' to='/notFound404' />
		</Main>
	</BrowserRouter>
), document.getElementById('app'));

//<Route path='/child' component={Child}  source="http://localhost:8000/" />
//<Route path="*" component={NotFoundPage} />
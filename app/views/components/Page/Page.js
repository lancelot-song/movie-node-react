require('./Page.css');
import React from 'react';
import {Link} from 'react-router-dom';

const Page = function(props){
	const { baseUrl, maxPage } = props;
	const pages = [];
	const newPage = (baseUrl, curPage) => {
		return <Link to={baseUrl+'/'+curPage} key={curPage}>{curPage}</Link>
	}
	for(let i = 1, len = maxPage+1; i < len; i++ ){
		pages.push( newPage(baseUrl, i) );
	}
	return (
		<div className='ui-page-group'>
			{pages}
		</div>
	)
}
export default Page;
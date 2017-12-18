require('./Page.css');
import React from 'react';
import {Link} from 'react-router-dom';

const Page = function(props){
	const baseUrl = props.baseUrl;
	const pages = props.pages.map((page, index) => {
		return (
			<Link to={baseUrl+'/'+page} key={index}>{page}</Link>
		)
	})
	return (
		<div className='ui-page-group'>
			{pages}
{/*			<p>
				<Link to={props}>下一页</Link>转到
				<input type='text' name='pageNum' />页
				<button className='ui-btn ui-btn-xs'>确定</button>
			</p>*/}
		</div>
	)
}
export default Page;
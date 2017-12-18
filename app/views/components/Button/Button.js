import React from 'react';

const Button = function(props){
	return (
		<button className={ 'ui-btn' + props.param.class } type={props.param.type}>{props.param.txt}</button>
	)
}
export default Button;
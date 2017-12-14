import React from 'React';

const DialogTip = function(props){
	return (
		<div className='ui-dialog-tip'>
			<p>{props.txt}</p>
		</div>
	)
}
export default DialogTip;
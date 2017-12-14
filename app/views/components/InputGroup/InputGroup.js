import React from 'react';

class InputGroup extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			val : this.props.val
		}
	}
	handleChange = (event) =>{
		this.setState({
			val : event.target.value
		});
	}
	render(){
		const { title, type, name, placeholder } = this.props;
		return (
			<div className='ui-form-group'>
				<label>{title}</label>
				<input 
					className='ui-form-control' 
					type={type} 
					name={name} 
					placeholder={placeholder} 
					value={this.state.val}
					onChange={this.handleChange}  />
			</div>
		)
	}
}
InputGroup.defaultProps = {
}
InputGroup.PropsType = {
}
export default InputGroup;
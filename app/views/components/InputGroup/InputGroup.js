import React from 'react';

class InputGroup extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			inputVal : this.props.inputVal || ''
		}
	}
	handleChange = (event) =>{
		this.setState({
			inputVal : event.target.value
		});
	}
	render(){
		const { labelText, inputType, inputName, placeholder } = this.props;
		return (
			<div className='ui-form-group'>
				<label className='ui-form-label'>{labelText}</label>
				<input 
					className='ui-form-control' 
					type={inputType} 
					name={inputName} 
					placeholder={placeholder} 
					value={this.state.inputVal}
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
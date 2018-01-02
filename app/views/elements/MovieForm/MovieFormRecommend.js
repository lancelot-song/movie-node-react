import React from 'react';
import InputGroup from 'components/InputGroup/InputGroup';

class MovieForm extends React.Component {
    constructor (props){
        super(props);
    }
    render() {
        const { items } = this.props;
        return (
            <div className="ui-form-body">
                <InputGroup inputType='text' labelText='电影名字' inputName='recommend[movie]' inputVal='5a4b0106f394943f88a6cbe1' placeholder='请输入内容'/>
                <InputGroup inputType='text' labelText='电影简介' inputName='recommend[comment]' inputVal={items.comment} placeholder='请输入内容'/>
            </div>
        );
    }
}
MovieForm.defaultProps = {
    items : {
        comment : '默认评价'
    }
};
MovieForm.PropsType = {
    items : React.PropTypes.object
}

export default MovieForm;

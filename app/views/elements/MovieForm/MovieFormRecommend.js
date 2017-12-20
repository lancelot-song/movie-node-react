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
                <InputGroup type='text' title='电影名字' name='recommend[movie]' val='5a37713668443a0ce84ab034' placeholder='请输入内容'/>
                <InputGroup type='text' title='导演名字' name='recommend[comment]' val={items.comment} placeholder='请输入内容'/>
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

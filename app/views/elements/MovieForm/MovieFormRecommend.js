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
                <InputGroup type='text' title='电影名字' name='recommend[_id]' val='5a1ab499f6a77e2da0c46087' placeholder='请输入内容'/>
                <InputGroup type='text' title='电影名字' name='recommend[movie]' val='5a1ab499f6a77e2da0c46087' placeholder='请输入内容'/>
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

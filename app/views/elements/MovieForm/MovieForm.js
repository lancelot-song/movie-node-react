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
                <InputGroup type='text' title='电影名字' name='movie[title]' val={items.title} placeholder='请输入内容'/>
                <InputGroup type='text' title='导演名字' name='movie[doctor]' val={items.doctor} placeholder='请输入内容'/>
                <InputGroup type='text' title='郭嘉' name='movie[country]' val={items.country} placeholder='请输入内容'/>
                <InputGroup type='text' title='语言' name='movie[language]' val={items.language} placeholder='请输入内容'/>
                <InputGroup type='text' title='上映年份' name='movie[year]' val={items.year} placeholder='请输入内容'/>
                <InputGroup type='text' title='简介' name='movie[summary]' val={items.summary} placeholder='请输入内容'/>
                <InputGroup type='text' title='封面' name='movie[poster]' val={items.poster} placeholder='请输入内容'/>
                <InputGroup type='text' title='播放地址' name='movie[flash]' val={items.flash} placeholder='请输入内容'/>
            </div>
        );
    }
}
MovieForm.defaultProps = {
    items : {
        title : '',
        doctor : '',
        country : '',
        language : '',
        year : '',
        summary : '',
        poster : '',
        flash : ''
    }
};
MovieForm.PropsType = {
    items : React.PropTypes.object
}

export default MovieForm;

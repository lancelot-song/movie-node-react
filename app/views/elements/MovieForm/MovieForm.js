import React from 'react';
import InputGroup from 'components/InputGroup/InputGroup';

class MovieForm extends React.Component {
    constructor (props){
        super(props);
    }
    render() {
        const { values } = this.props;
        return (
            <div className="ui-form-body">
                <InputGroup type='text' title='电影名字' name='movie[title]' val={values.title} placeholder='请输入内容'/>
                <InputGroup type='text' title='导演名字' name='movie[doctor]' val={values.doctor} placeholder='请输入内容'/>
                <InputGroup type='text' title='郭嘉' name='movie[country]' val={values.country} placeholder='请输入内容'/>
                <InputGroup type='text' title='语言' name='movie[language]' val={values.language} placeholder='请输入内容'/>
                <InputGroup type='text' title='上映年份' name='movie[year]' val={values.year} placeholder='请输入内容'/>
                <InputGroup type='text' title='简介' name='movie[summary]' val={values.summary} placeholder='请输入内容'/>
                <InputGroup type='text' title='封面' name='movie[poster]' val={values.poster} placeholder='请输入内容'/>
                <InputGroup type='text' title='播放地址' name='movie[flash]' val={values.flash} placeholder='请输入内容'/>
            </div>
        );
    }
}
MovieForm.defaultProps = {
    values : {
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
    values : React.PropTypes.object
}

export default MovieForm;

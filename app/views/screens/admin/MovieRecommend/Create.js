import React from 'react';
import MovieFormRecommend from 'elements/MovieForm/MovieFormRecommend';


class Create extends React.Component {
    constructor(props){
        super(props);
    }
    handleSubmit(event){

        event.preventDefault();
        const _form = event.target;
        const _type = _form.method;
        const _action = _form.action;
        
        fetch(_action,{
            method : _type,
            credentials: 'include',
            body : new FormData(_form)
        })
        .then(function(response){
            if(response.status > 400){
                throw new Error('MovieCategory create error');
            }
            return response.json();
        })
        .then(function(datas){
            if(datas.state===1){
                alert('添加推荐成功');
                //window.location.href = datas.url;
            }else{
                alert('添加推荐失败');
            }
        })
    }
    render() {
        return (
            <div className='ui-form-layout'>
                <form method='POST' action='/admin/movieRecommend/save/' onSubmit={this.handleSubmit.bind(this)}>
                    <div className='ui-form-head'>
                        <h1 className='ui-form-title'>新增电影推荐</h1>
                    </div>
                    <MovieFormRecommend />
                    <div className='ui-form-foot'>
                        <button type='submit' className='ui-btn'>Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

Create.defaultProps = {};

export default Create;

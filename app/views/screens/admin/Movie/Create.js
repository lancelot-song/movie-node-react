require('es6-promise').polyfill();
require('isomorphic-fetch');

import React from 'react';
import { widthRouter } from 'react-router';
import MovieForm from 'elements/MovieForm/MovieForm';


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
            if(datas.status===1){
                window.location.href = datas.url;
            }else{
                alert('添加分类失败');
            }
        })
    }
    render() {
        return (
            <div className='ui-layout'>
                <form method='POST' action='/admin/movie/save/' className='ui-form-layout' onSubmit={this.handleSubmit.bind(this)}>
                    <div className='ui-form-head'>
                        <h1 className='ui-form-title'>新增电影内容</h1>
                    </div>
                    <MovieForm />
                    <div className='ui-form-foot'>
                        <button type='submit' className='ui-btn'>Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

Create.defaultProps = {};

export default widthRouter(Create);

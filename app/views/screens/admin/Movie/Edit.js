require('es6-promise').polyfill();
require('isomorphic-fetch');

import React from 'react';
import MovieForm from 'elements/MovieForm/MovieForm';


class Create extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movieForm : {
                show : false,
                values : null
            }
        }
    }
    handleSubmit(event){

        event.preventDefault();
        const _form = event.target;
        const _type = _form.method;
        const _action = _form.action;

        fetch(_action,{
            method : _type,
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
    componentDidMount(){
        const _url = '/json/admin/movie/edit/'+this.props.match.params.id;
        const self = this;
        fetch(_url, {
            method : 'GET',
        })
        .then(function(response){
            if(response.status > 400){
                throw new Error('GET Movie Edit Error');
            }
            return response.json();
        })
        .then(function(movie){
            self.setState({
                movieForm : {
                    show : true,
                    values : movie
                }
            })
        })
    }
    render() {
        return (
            <div className='ui-layout'>
                <form method='POST' action='/admin/movie/create' className='ui-form-layout' onSubmit={this.handleSubmit.bind(this)}>
                    <div className='ui-form-head'>
                        <h1 className='ui-form-title'>新增电影类型</h1>
                    </div>
                    { this.state.movieForm.show && 
                        <MovieForm values={this.state.movieForm.values} />
                    }
                    <div className='ui-form-foot'>
                        <button type='submit' className='ui-btn ui-btn-success'>Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

Create.defaultProps = {};

export default Create;

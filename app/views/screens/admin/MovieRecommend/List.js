require('es6-promise').polyfill();
require('isomorphic-fetch');

import React from 'react';
import {Link} from 'react-router-dom';
import MovieList from 'elements/MovieList/MovieList';
import Page from 'components/Page/Page';


class Create extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listModal : {
                show : false,
                items : null
            }
        }
    }
    loadList = (_id) => {

        const _url = '/json/admin/movieRecommend/list';
        const self = this;

        self.setState({
            listModal : {
                show : false,
                items : null
            }
        })

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
            console.log('recommend')
            console.log(movie)
            self.setState({
                listModal : {
                    show : true,
                    items : movie
                }
            })
        })

    }
    componentDidMount(){
        this.loadList(0);
    }
    render() {
        const MovieTypes = ['电影名字','导演','郭嘉','语言','上映年份','录入时间','简介'];
        return (
            <div className='ui-form-layout'>
                <div className='ui-form-head'>
                    <Link to='/admin/movieRecommend/create' className='ui-btn ui-btn-default right'>新增</Link>
                    <h1 className='ui-form-title'>电影列表</h1>
                </div>
                <div className='ui-form-body'>
                    { this.state.listModal.show && 
                        <MovieList types={MovieTypes} items={this.state.listModal.items} />
                    }
                </div>
                <div className='ui-form-foot'>
                    <Page baseUrl='/admin/movie/list' pages={[1,2,3,4]} />
                </div>
            </div>
        );
    }
}

Create.defaultProps = {};

export default Create;

require('es6-promise').polyfill();
require('isomorphic-fetch');

import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import MovieRecommendList from 'elements/MovieList/MovieRecommendList';
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
        const MovieTypes = ['电影名字','评论'];
        console.log(this.state.listModal.items)
        return (
            <div className='ui-form-layout'>
                <div className='ui-form-head'>
                    <Link to='/admin/movieRecommend/create' className='ui-btn ui-btn-default right'>新增</Link>
                    <h1 className='ui-form-title'>电影列表</h1>
                </div>
                <div className='ui-form-body'>
                    { this.state.listModal.show && 
                        <MovieRecommendList types={MovieTypes} items={this.state.listModal.items} />
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

export default withRouter(Create);

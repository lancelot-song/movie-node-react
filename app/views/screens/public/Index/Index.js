require('normalize.css/normalize.css');
require('styles/Base.css');

import React from 'react';
import { withRouter } from 'react-router';
import BannerSlider from 'components/Slider/BannerSlider';
import IndexList from 'elements/IndexList/IndexList';

class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            banner : null,
            list : null
        }
    }
    componentDidMount(){
        const self = this;

        fetch('/json/movie/recommend',{
            method : 'GET',
            credentials: 'include'
        })
        .then(function(response){
            if(response.status > 400){
                throw new Error('App.js 请求数据失败')
            }
            return response.json();
        })
        .then(function(stories){
            self.setState({
                banner : stories
            });
        });

        fetch('/json/index/list',{
            method : 'GET',
            credentials: 'include'
        })
        .then(function(response){
            if(response.status > 400){
                throw new Error('App.js 请求数据失败')
            }
            return response.json();
        })
        .then(function(stories){
            self.setState({
                list : stories
            });
        });

    }
    render() {
        const { banner, list } = this.state;
        return (
            <div className='ui-content'>
                {banner && <BannerSlider banner={banner} spped='.5' />}
                {list && <IndexList items={list} />}
            </div>
        );
    }
}

Index.defaultProps = {};

export default withRouter(Index);

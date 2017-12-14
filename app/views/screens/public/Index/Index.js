require('normalize.css/normalize.css');
require('styles/Base.css');

require('es6-promise').polyfill();
require('isomorphic-fetch');
import React from 'react';
import Main from 'screens/Main';
import BannerSlider from 'components/Slider/BannerSlider';

class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            banner : null
        }
    }
    componentDidMount(){
        const self = this;

        fetch('/banner/indexBanner',{
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

    }
    render() {
        const banner = this.state.banner;
        return (
            <div className='ui-content'>
                {banner && <BannerSlider banner={banner} spped='.5' />}
            </div>
        );
    }
}

Index.defaultProps = {};

export default Index;

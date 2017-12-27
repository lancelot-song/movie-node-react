require('normalize.css/normalize.css');
require('styles/Base.css');

import React from 'react';
import { withRouter } from 'react-router';
import Banner from 'components/Banner/Banner';
import MessageBox from 'elements/Message/MessageBox';

class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            banner : undefined,
            items : []
        }
    }
    handleReply(){

    }
    componentDidMount(){
        const self = this;

        fetch('/json/message/banner',{
            method : 'GET'
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

        fetch('/json/message/items',{
            method : 'GET'
        })
        .then(function(response){
            if(response.status > 400){
                throw new Error('App.js 请求数据失败')
            }
            return response.json();
        })
        .then(function(stories){
            self.setState({
                items : stories
            });
        });


    }
    render() {
        const { banner, items } = this.state;
        return (
            <div className='ui-content'>
                {banner && <Banner banner={banner} />}
                <MessageBox items={items} />
            </div>
        );
    }
}

Index.defaultProps = {};

export default withRouter(Index);

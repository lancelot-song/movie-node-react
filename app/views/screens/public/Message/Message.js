import React from 'react';
import Banner from 'components/Banner/Banner';
import MsgBanner from 'images/msg_banner.png';
import MessageBox from 'elements/Message/MessageBox';

class Message extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items : [{
                user : {
                    name : 'lszh'
                },
                content : '123123123'
            }]
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
                <Banner banner={MsgBanner} />
                <MessageBox items={items} />
            </div>
        );
    }
}

Message.defaultProps = {};

export default Message;

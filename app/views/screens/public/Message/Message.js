import React from 'react';
import Banner from 'components/Banner/Banner';
import MsgBanner from 'images/msg_banner.png';
import MessageBox from 'elements/Message/MessageBox';

class Message extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items : null
        }
    }
    postMsg = (event) =>{
        event.preventDefault();
        const _form = event.target;
        const self = this;
        fetch('/message/new',{
            method : 'POST',
            credentials: 'include',
            body : new FormData(_form)
        })
        .then(function(response){
            if( response.status > 400){
                throw new Error('post /message/new error')
            }
            return response.json();
        })
        .then(function(data){
            let items = self.state.items;
            items.unshift(data);
            self.setState({
                items : items
            });
        });
    }
    componentDidMount(){
        const self = this;

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
                { items && <MessageBox items={items} postMsg={this.postMsg} />}
            </div>
        );
    }
}

Message.defaultProps = {};

export default Message;

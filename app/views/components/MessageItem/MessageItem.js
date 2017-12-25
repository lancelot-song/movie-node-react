require('./MessageItem.css');
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class MessageItem extends React.Component {
    constructor (props){
        super(props);
    }
    handleReply = () => {
        this.props.handleReply();
    }
    render() {
        const messageItem = this.props.item.map((item,index)=>{
            return (
                <div className='msg-item' key={index}>
                    <div className='msg-photo'>
                        <img src='' />
                    </div>
                    <div className='msg-hd'>
                        <span className='msg-name'>{item.user.name}</span>
                        <span className='msg-time'>{item.meta.createAt}</span>
                        <span className='msg-reply' onClick={this.handleReply}>回复</span>
                    </div>
                    <div className='msg-bd'>
                        <p>{item.content}</p>
                    </div>
                </div>
            )
        })
        return (
            <div className='ui-message'></div>
        );
    }
}

MessageItem.defaultProps = {};
export default MessageItem;

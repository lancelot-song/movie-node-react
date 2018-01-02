require('./MessageItem.css');
import React from 'react';
import MessageForm from 'elements/Message/MessageForm';
import userPhoto from 'images/user_photo.jpg';
// import moment from 'moment';

class MessageItem extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            replayModal : {
                show : false
            } 
        }
    }
    handleReply = () => {
        const replayModal = this.state.replayModal;
        this.setState({
            replayModal : {
                show : !replayModal.show
            }
        })
    }
    render() {
        const { item, user } = this.props;
        return (
            <div className='msg-item'>
                <div className='msg-photo'>
                    <img src={userPhoto} />
                </div>
                <div className='msg-hd'>
                    <span className='msg-name'>{item.from.name}</span>
                    {/*<span className='msg-time'>{item.meta.createAt}</span>*/}
                    {   user.name &&
                        <span className='msg-reply' onClick={this.handleReply}>回复</span>
                    }
                </div>
                <div className='msg-bd'>
                    <p>{item.content}</p>
                </div>
                { 
                    user.name && this.state.replayModal.show && 
                    <MessageForm 
                        newMsg={this.newMsg}
                        btnText='回复'
                        user={user}
                        placeholder='请输入回复内容' />
                }
            </div>
        );
    }
}
MessageItem.defaultProps = {};
export default MessageItem;

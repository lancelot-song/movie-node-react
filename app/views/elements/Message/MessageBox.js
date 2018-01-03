require('./Message.css')
import React from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
// import moment from 'moment';

class MovieForm extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            user : {
                name : null
            }
        }
    }
    postMsg = (event) => {
        this.props.postMsg(event);
    }
    componentDidMount(){
        const self = this;
        fetch('/user/status',{
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
                user : stories
            });
        });
    }
    render() {
        const { items } = this.props;
        const user = this.state.user;
        return (
            <div className='ui-msg-box'>
                { user.name ? 
                    <MessageForm postMsg={this.postMsg} placeholder='此页暂不可用' btnText='留言' fromId={user._id}/>
                    : <div className='ui-msg-login'>回复/留言 请先登录</div>
                }
                <MessageList postMsg={this.postMsg} items={items} user={user}/>
            </div>
        );
    }
}
MovieForm.defaultProps = {};
MovieForm.PropsType = {
    items : React.PropTypes.object
}

export default MovieForm;

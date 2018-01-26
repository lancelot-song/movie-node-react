require('./Message.css')
import React from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
// import moment from 'moment';

class MovieForm extends React.Component {
    static contextTypes = {
        store : React.PropTypes.object
    }
    constructor (props){
        super(props);
        this.user = { user : null }
    }
    postMsg = (event,itemId) => {
        itemId!==undefined ?
            this.props.postMsg(event,itemId)
            : this.props.postMsg(event)
    }
    componentWillMount () {
        this._getContextStore();
    }
    _getContextStore (){
        const { store } = this.context;
        const state = store.getState();
        console.log(state);
        this.setState({
            user : state.user
        });
    }
    render() {
        const { items, user } = this.props;
        return (
            <div className='ui-msg-box'>
                { this.state.user.name }
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
MovieForm.PropsType = {}

export default MovieForm;

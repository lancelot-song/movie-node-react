require('./Message.css')
import React from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
// import moment from 'moment';

class MovieForm extends React.Component {
    constructor (props){
        super(props);
    }
    newMsg(msg){

    }
    render() {
        const { items } = this.props;
        return (
            <div className='ui-msg-box'>
                <MessageForm 
                    newMsg={this.newMsg}
                    placeholder='此页暂不可用~'
                    maxHeight='150'
                    maxNum='500' />
                <MessageList items={items} />
            </div>
        );
    }
}
MovieForm.defaultProps = {};
MovieForm.PropsType = {
    items : React.PropTypes.object
}

export default MovieForm;

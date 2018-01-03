import React from 'react';
import TextareaGroup from 'components/TextareaGroup/TextareaGroup';
// import moment from 'moment';

class MovieForm extends React.Component {
    constructor (props){
        super(props);
    }
    postMsg = (event) =>{//提交表单
        this.props.postMsg(event);
    }
    render() {
        const { placeholder, fromId, toId, replyId, btnText, reply } = this.props;
        return (
            <div className='ui-msg-form'>
                <form method='POST' action='/message/new/' onSubmit={this.postMsg}>
                    <TextareaGroup 
                        placeholder={placeholder}
                        name='message[content]'
                        maxHeight='150'
                        maxNum='500' />
                    <input type="hidden" name='message[from]' value={fromId} />
                    { reply && 
                        <input type="hidden" name='message[to]' value={toId} /> &&
                        <input type="hidden" name='message[reply]' value={replyId} />
                    }
                    <div className='ui-btn-group right'>
                        <button className='ui-btn'>{btnText}</button>
                    </div>
                </form>
            </div>
        );
    }
}
MovieForm.defaultProps = {};
MovieForm.PropsType = {}

export default MovieForm;

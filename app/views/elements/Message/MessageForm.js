import React from 'react';
import TextareaGroup from 'components/TextareaGroup/TextareaGroup';
// import moment from 'moment';

class MovieForm extends React.Component {

    static contextTypes = {
        store : React.PropTypes.object
    }

    constructor (props){
        super(props);
    }

    //绑定表单提交
    submitHandle = (event) =>{
        event.preventDefault();
        const callback = this._addMsg;
        const form = event.target;
        this._postMsg(form, callback);
    }

    //POST数据
    _postMsg = (form, callback) =>{

        const store = this.context.store;
        const { subParam } = store.getState();

        fetch( subParam.url ,{
            method : subParam.type,
            credentials: 'include',
            body : new FormData(form)
        })
        .then(function(response){
            if( response.status > 400){
                throw new Error(subParam.error)
            }
            return response.json();
        })
        .then(function(data){
            callback(data);
        });

    }

    //POST成功 渲染新数据
    _addMsg = (data) => {
        const store = this.context.store;
        const state = store.getState();
        state.items.unshift(data);
        store.dispatch({
            type : "UPDATE_ITEMS",
            items : state.items
        });
    }

    render() {
        const { placeholder, fromId, toId, replyId, btnText, reply } = this.props;
        return (
            <div className='ui-msg-form'>
                <form method='POST' action='/message/new/' onSubmit={this.submitHandle}>
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

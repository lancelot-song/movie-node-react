import React from 'react';

class Signout extends React.Component{
    constructor(props){
        super(props);
    }
    submitCallback(data){
        window.location.reload();
    }
    render(){
        return (
            <form method="POST" action='/user/signout' id='signout' onSubmit={this.props.submitForm.bind(this, 'signout')}>
                <div className='ui-dialog-head'>退出登录</div>
                <div className='ui-dialog-body'>
                    <p>您确定退出吗？</p>
                </div>
                <div className='ui-dialog-foot'>
                    <button type='submit' className='ui-btn ui-btn-error'>退出</button>
                    <button type='button' className='ui-btn ui-btn-default' onClick={this.props.hideModal.bind('none')}>取消</button>
                </div>
            </form>
        )
    }
}

export default Signout;
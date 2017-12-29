import React from 'react';
import DialogTip from 'components/Dialog/DialogTip'


class Signin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tip : {
                show : false,
                txt : ''
            }
        }
    }
    submitCallback = (data) =>{
        if(data.state==1){
            window.location.reload();
        }
        else{
            this.setState({
                tip : {
                    show : true,
                    txt : data.txt
                }
            });
        }
    }
    render(){
        const tip = this.state.tip;
        return (
            <form method="POST" action='/user/signin' id='signin' onSubmit={this.props.submitForm.bind(this, 'signin')}>
                <div className='ui-dialog-head'>登录</div>
                <div className='ui-dialog-body'>
                    <InputGroup
                        labelText='用户名'
                        inputType='text'
                        placeholder='请输入用户名'
                        name='user[name]' />
                    <InputGroup
                        labelText='密码'
                        inputType='password'
                        placeholder='请输入密码'
                        name='user[password]' />
                </div>
                { tip.show &&
                  <DialogTip txt={tip.txt} />
                }
                <div className='ui-dialog-foot'>
                    <button type='submit' className='ui-btn ui-btn-success'>登录</button>
                    <button type='button' className='ui-btn ui-btn-default' onClick={this.props.hideModal.bind('none')}>取消</button>
                </div>
            </form>
        )
    }
}

export default Signin;

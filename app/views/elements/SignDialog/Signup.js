import React from 'react';
import DialogTip from 'components/Dialog/DialogTip'


class Signup extends React.Component{
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
            })
        }
    }
    render(){
        const tip = this.state.tip;
        return (
            <form method="POST" action='/user/signup' id='signup' onSubmit={this.props.submitForm.bind(this, 'signup')}>
                <div className='ui-dialog-head'>注册</div>
                <div className='ui-dialog-body'>
                    <div className='ui-form-group'>
                        <label className='ui-form-label'>用户名</label>
                        <input className='ui-form-control' type='text' placeholder='请输入用户名' name='user[name]' />
                    </div>
                    <div className='ui-form-group'>
                        <label className='ui-form-label'>密码</label>
                        <input className='ui-form-control' type='password' placeholder='请输入密码' name='user[password]' />
                    </div>
                </div>
                { tip.show &&
                  <DialogTip txt={tip.txt} />
                }
                <div className='ui-dialog-foot'>
                    <button type='submit' className='ui-btn ui-btn-success'>注册</button>
                    <button type='button' className='ui-btn ui-btn-default' onClick={this.props.hideModal.bind('none')}>取消</button>
                </div>
            </form>
        )
    }
}

export default Signup;

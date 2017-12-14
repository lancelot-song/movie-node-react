require('./Header.css');
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './HeaderNav';

const ShowModal = function(props){
    return (
        <span className="ui-link" onClick={props.showModal.bind(this, props.type)}>{props.text}</span>
    )
}
const Signin = function(props){
    return (
        <div className="ui-sign">
            <span>欢迎您，{props.username}</span>
            <span className="ui-sign-line">|</span>
            <ShowModal showModal={props.showModal} text='退出' type='signout' />
        </div>
    )
}
const Signout = function(props){
    return (
        <div className="ui-sign">
            <ShowModal showModal={props.showModal} text='注册' type='signup' />
            <span className="ui-sign-line">|</span>
            <ShowModal showModal={props.showModal} text='登录' type='signin' />
        </div>
    )
}

class Header extends React.Component {
    constructor (props){
        super(props);
    }
    showModal = (modal) => {
        this.props.showModal(modal);
    }
    render() {
        const {user} = this.props;
        return (
            <div className="ui-header">
                <nav>
                    <h1 className="ui-logo"><Link to='/'>LSZH Movie Album</Link></h1>
                    <Nav />
                    {user.name
                      ? <Signin showModal={this.showModal} username={user.name} />
                      : <Signout showModal={this.showModal}/>
                    }
                </nav>
            </div>
        );
    }
}
Header.defaultProps = {
    user : {
        name : null
    }
};
Header.PropsType = {
    user : React.PropTypes.object
}

export default Header;

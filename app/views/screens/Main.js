require('normalize.css/normalize.css');
require('styles/Base.css');

require('es6-promise').polyfill();
require('isomorphic-fetch');
import React from 'react';
import { withRouter } from 'react-router';
import Header from 'elements/Header/Header';
import SignDialog from 'elements/SignDialog/SignDialog';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user : {
                name : null
            },
            signModal : {
                show: false,
                type : ''//signin/signup/signout
            }
        }
    }
    showModal = (modal) =>{
        this.setState({
            signModal : {
                  show : true,
                  type : modal
            }
        })
    }
    hideModal = () =>{
        this.setState({ signModal : { show : false} })
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
        const {user, signModal} = this.state;
        return (
            <div className='app'>
                <Header user={user} showModal={this.showModal}/>
                {signModal.show && <SignDialog type={signModal.type} hideModal={this.hideModal}/> }
                {this.props.children}
            </div>
        );
    }
}

Main.defaultProps = {};

export default withRouter(Main);

require('normalize.css/normalize.css');
require('styles/Base.css');

require('es6-promise').polyfill();
require('isomorphic-fetch');
import React from 'react';
import Header from '../Header/Header';
import SignDialog from '../SignDialog/SignDialog';
import BannerSlider from 'components/Slider/BannerSlider';

const Loading = function(){
    return (
        <div className="ui-loading"></div>
    )
}

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            modal : {
                show: false,
                type : ''//signin/signup/signout
            }
        }
    }

    showModal = (modal) =>{
        this.setState({
            modal : {
              show : true,
              type : modal
            }
        })
    }

    hideModal = () =>{
        this.setState({ modal : { show : false} })
    }

    render(){
        const modal = this.state.modal;
        const {banner,user} = this.props;
        return (
            <div className='app'>
                {user && 
                    <Header user={user} showModal={this.showModal}/>
                }
                {banner && 
                    <BannerSlider banner={banner} spped='.5' />
                }
                {modal.show && 
                    <SignDialog type={modal.type} hideModal={this.hideModal}/>
                }
            </div>
        )
    }
}

class AppInit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading : true,
            banner : null,
            user : null
        }
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
                user : stories,
                isLoading : false
            });
        });

        fetch('/banner/indexBanner',{
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
                banner : stories,
                isLoading : false
            });
        });


    }
    render() {
        const banner = this.state.banner;
        const user = this.state.user;
        return (
            <div>
                <App banner={banner} user={user} />
            </div>
        );
    }
}

AppInit.defaultProps = {};

export default AppInit;

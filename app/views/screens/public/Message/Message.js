import React from 'react';
import Banner from 'components/Banner/Banner';
import MsgBanner from 'images/msg_banner.png';
import MessageBox from 'elements/Message/MessageBox';

// 创建 redux 数据包装器
function createStore(reducer){
    let state = null;
    const listeners = [];
    const subscribe = (listen) => listeners.push(listen);
    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listen) => listen());
    }
    dispatch();
    return { getState, dispatch, subscribe }
}

// 创建 redux 数据模式
const userReducer = (state, action) => {
    if(!state){
        return {
            user : {
                name : 'lszh',
                img : 'http://'
            },
            subParam : {
                url : '/message/new',
                type : 'POST',
                error : 'POST /message/new error'
            },
            items : null
        }
    }
    switch(action.type){
        case "UPDATE_USER_IMG" :
            return {
                user : {
                    name : { ...state.user.name },
                    img : action.img
                },
                subParam : { ...state.subParam },
                item : { ...state.items }
            }
        case "UPDATE_USER_NAME" :
            return {
                user : {
                    name : action.name,
                    img : { ...state.user.img }
                },
                subParam : { ...state.subParam },
                items : { ...state.items }
            }
        case "UPDATE_ITEMS" :
            return {
                user : { ...state.user },
                subParam : { ...state.subParam },
                items : action.items
            }
        default :
            return state;
    }
}
const store = createStore(userReducer);

class Message extends React.Component {

    static childContextTypes = {
        store : React.PropTypes.object
    }

    constructor(props){
        super(props);
        this.state = {
            items : null,
            user : {
                name : null
            }
        }
    }

    getChildContext(){
        return { store }
    }

    componentDidMount(){
        const self = this;
        //渲染初始数据
        self._updateItems()
        //请求完成后 重新渲染
        store.subscribe(() => self._updateItems());
        //请求列表数据
        self._getItems();
        //请求用户数据
        self._getUser();
    }

    _updateItems(){
        const state = store.getState();
        this.setState({
            items : state.items
        });
    }

    _getItems(){
        const self = this;
        fetch('/json/message/items',{
            method : 'GET'
        })
        .then(function(response){
            if(response.status > 400){
                throw new Error('App.js 请求数据失败')
            }
            return response.json();
        })
        .then(function(stories){
            //每次dispatch修改数据 都会调用 store.subscribe 重新渲染参数
            store.dispatch({
                type : "UPDATE_ITEMS",
                items : stories
            });
        });
    }

    _getUser(){
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
            stories.name ? 
                self.setState({ user : stories})
                : self.setState({ user : { name : null }});
        });
    }
    render() {
        const { banner, items, user } = this.state;
        return (
            <div className='ui-content'>
                <Banner banner={MsgBanner} />
                { items && <MessageBox items={items} user={user} postMsg={this.postMsg} />}
            </div>
        );
    }
}

Message.defaultProps = {};
export default Message;

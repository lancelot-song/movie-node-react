import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            navs : [{
                href : '/',
                txt : '首页'
            },{
                href : '/message',
                txt : '留言板'
            }]
        }
    }
    render(){
        const navs = this.state.navs.map((nav, index)=>{
            return <li key={index}><NavLink to={nav.href} activeClassName='current'>{nav.txt}</NavLink></li>
        })
        return (
            <ul className="ui-nav">{navs}</ul>
        )
    }
}
export default Nav;
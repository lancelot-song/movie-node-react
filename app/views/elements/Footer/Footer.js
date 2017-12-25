require('./Footer.css');
import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './FooterMenu.js';

class Footer extends React.Component {
    constructor (props){
        super(props);
    }
    render() {
        return (
            <div className="ui-footer">
                <div className="ui-layout">
                    <Menu />
                </div>
            </div>
        );
    }
}
export default Footer;

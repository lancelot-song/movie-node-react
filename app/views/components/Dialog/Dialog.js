require('./Dialog.css');
import React from 'react';

const Dialog = function(props){
    return (
        <div className='ui-dialog-modal'>
            <div className='ui-dialog'>
                <div className='ui-dialog-content'>{props.children}</div>
            </div>
        </div>
    )
}

export default Dialog;

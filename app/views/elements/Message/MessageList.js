import React from 'react';

class MovieForm extends React.Component {
    constructor (props){
        super(props);
    }
    newMsg(msg){

    }
    render() {
        const { items } = this.props;
        return (
            <div className='ui-msg-box'>list</div>
        );
    }
}
MovieForm.defaultProps = {};
MovieForm.PropsType = {
    items : React.PropTypes.object
}

export default MovieForm;

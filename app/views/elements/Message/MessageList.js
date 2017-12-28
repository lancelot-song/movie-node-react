import React from 'react';
import MessageItem from 'components/MessageItem/MessageItem';
class MovieForm extends React.Component {
    constructor (props){
        super(props);
    }
    render() {
        const { items } = this.props;
        const list = this.props.items.map( (item, index) =>{
            return <MessageItem item={item} key={index} />
        })
        return (
            <div className='ui-msg-list'>
                {list}
            </div>
        );
    }
}
MovieForm.defaultProps = {};
MovieForm.PropsType = {
    items : React.PropTypes.object
}
export default MovieForm;

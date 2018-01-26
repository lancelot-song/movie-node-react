import React from 'react';
import MessageItem from 'components/MessageItem/MessageItem';
class MovieForm extends React.Component {
    constructor (props){
        super(props);
    }
    postMsg = (event, itemId) =>{//提交表单
        itemId!==undefined ?
            this.props.postMsg(event,itemId)
            : this.props.postMsg(event)
    }
    render() {
        const { items, user } = this.props;
        const list = this.props.items.map( (item, index) =>{
            return <MessageItem item={item} user={user} key={index} itemId={index} postMsg={this.postMsg} />
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

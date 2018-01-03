import React from 'react';
import MessageItem from 'components/MessageItem/MessageItem';
class MovieForm extends React.Component {
    constructor (props){
        super(props);
    }
    postMsg = (event) =>{//提交表单
        this.props.postMsg(event);
    }
    render() {
        const { items, user } = this.props;
        const list = this.props.items.map( (item, index) =>{
            return <MessageItem item={item} user={user} key={index} postMsg={this.postMsg} />
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

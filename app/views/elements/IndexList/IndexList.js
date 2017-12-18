require('./IndexList.css')
import React from 'react';
import { Link } from 'react-router-dom';

class MovieForm extends React.Component {
    constructor (props){
        super(props);
    }
    clickDel(_id){

    }
    render() {
        const { items } = this.props;
        const list = items.map((item, index)=>{
            return (
                <div className='ui-list-item' key={index}>
                    <div className='item-img'>
                        <Link to={ '/movie/detail/' + item._id } >
                            <img src={item.poster} />
                        </Link>
                    </div>
                    <div className='item-info'>
                        <p className='item-title'><Link to={ '/movie/detail/' + item._id }>{item.title}</Link></p>
                        <p className='item-country'>{item.country}</p>
                        <p className='item-time'>{item.meta.createAt}</p>
                    </div>
                    <div className={'item-score item-score-'+item.score }></div>
                </div>
            )
        });
        return (
            <div className='ui-layout'>
                <div className='ui-content-list'>{list}</div>
            </div>
        );
    }
}
MovieForm.defaultProps = {};
MovieForm.PropsType = {
    items : React.PropTypes.object
}

export default MovieForm;

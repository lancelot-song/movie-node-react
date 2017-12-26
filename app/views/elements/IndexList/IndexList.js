require('./IndexList.css')
import React from 'react';
import { Link } from 'react-router-dom';
// import moment from 'moment';

class MovieForm extends React.Component {
    constructor (props){
        super(props);
    }
    render() {
        const { items } = this.props;
        const list = items.map((item, index)=>{
            return (
                <div className='ui-list-item' key={index}>
                    <div className='item-img'>
                        <Link to={ '/movie/detail/' + item._id }  title={item.title+'('+item.country+')'}>
                            <img src={item.poster} />
                        </Link>
                    </div>
                    <div className='item-info'>
                        <p className='item-title' title={item.title+'('+item.country+')'}>
                            <Link to={ '/movie/detail/' + item._id }>{item.title}&#40;{item.country}&#41;</Link>
                        </p>
                        <div className='item-from'>
                            <p className='item-doctor' title={item.doctor}>{item.doctor}</p>
                            {/*<p className='item-time'>{moment(item.meta.createAt).format('YYYY-MM-DD')}</p>*/}
                        </div>
                        <div className={'item-score item-score-'+item.score }></div>
                    </div>
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

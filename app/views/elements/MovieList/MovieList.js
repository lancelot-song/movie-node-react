import React from 'react';
import { Link } from 'react-router-dom';

class MovieForm extends React.Component {
    constructor (props){
        super(props);
    }
    clickDel(_id){

    }
    render() {
        const { types, items } = this.props;
        const thead = types.map((type,index) => {
            return (
                <th key={index}>{type}</th>
            )
        });
        const tbody = items.map((item,index) => {
            return (
                <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.doctor}</td>
                    <td>{item.country}</td>
                    <td>{item.language}</td>
                    <td>{item.year}</td>
                    <td>{item.meta.createdAt}</td>
                    <td>{item.summary}</td>
                    <td className='ui-center'>
                        <Link to={ '/movie/detail/' + item._id } className='ui-btn ui-btn-sm ui-btn-success'>查看</Link>
                        <Link to={ '/admin/movie/edit/' + item._id } className='ui-btn ui-btn-sm ui-btn-primary'>修改</Link>
                        <button onClick={this.clickDel.bind( this, item._id )} className='ui-btn ui-btn-sm ui-btn-warning'>删除</button>
                    </td>
                </tr>
            )
        });
        return (
            <table className='ui-table'>
                <thead>
                    <tr>
                        {thead}
                        <th className='ui-center'>操作</th>
                    </tr>
                </thead>
                <tbody>{tbody}</tbody>
            </table>
        );
    }
}
MovieForm.defaultProps = {};
MovieForm.PropsType = {
    items : React.PropTypes.object
}

export default MovieForm;

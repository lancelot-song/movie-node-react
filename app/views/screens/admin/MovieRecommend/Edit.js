import React from 'react';
import MovieForm from 'elements/MovieForm/MovieForm';


class Create extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            formModal : {
                show : false,
                items : null
            }
        }
    }
    handleSubmit(event){

        event.preventDefault();
        const _form = event.target;
        const _type = _form.method;
        const _action = _form.action;

        fetch(_action,{
            method : _type,
            credentials: 'include',
            body : new FormData(_form)
        })
        .then(function(response){
            if(response.status > 400){
                throw new Error('MovieCategory create error');
            }
            return response.json();
        })
        .then(function(datas){
            if(datas.state===1){
                console.log('reload')
                //window.location.reload();
            }else{
                alert('添加分类失败');
            }
        })
    }
    componentDidMount(){
        const _url = '/json/admin/movie/edit/'+this.props.match.params.id;
        const self = this;
        fetch(_url, {
            method : 'GET',
        })
        .then(function(response){
            if(response.status > 400){
                throw new Error('GET Movie Edit Error');
            }
            return response.json();
        })
        .then(function(movie){
            self.setState({
                formModal : {
                    show : true,
                    items : movie
                }
            })
        })
    }
    render() {
        return (
            <div className='ui-form-layout'>
                <form method='POST' action={ '/admin/movie/save/' + this.props.match.params.id } onSubmit={this.handleSubmit.bind(this)}>
                    <div className='ui-form-head'>
                        <h1 className='ui-form-title'>编辑电影推荐</h1>
                    </div>
                    { this.state.formModal.show && 
                        <MovieForm items={this.state.formModal.items} />
                    }
                    <div className='ui-form-foot'>
                        <button type='submit' className='ui-btn'>Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

Create.defaultProps = {};

export default Create;

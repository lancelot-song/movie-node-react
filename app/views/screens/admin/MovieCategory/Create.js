import React from 'react';
import InputGroup from 'components/InputGroup/InputGroup';


class Create extends React.Component {
    constructor(props){
        super(props);
    }
    handleSubmit(event){

        event.preventDefault();
        const _form = event.target;
        const _type = _form.method;
        const _action = _form.action;

        fetch(_action,{
            method : _type,
            body : new FormData(_form)
        })
        .then(function(response){
            if(response.status > 400){
                throw new Error('MovieCategory create error');
            }
            return response.json();
        })
        .then(function(datas){
            if(datas.status===1){
                window.location.href = datas.url;
            }else{
                alert('添加分类失败');
            }
        })

    }
    componentDidMount(){
    }
    render() {
        return (
            <div className='ui-layout'>
                <form method='POST' action='/admin/movieCategory/create' className='ui-form-layout' onSubmit={this.handleSubmit.bind(this)}>
                    <div className='ui-form-head'>
                        <h1 className='ui-form-title'>新增电影类型</h1>
                    </div>
                    <div className='ui-form-body'>
                        <InputGroup type='text' title='类型名称' name='category[name]' val='' placeholder='请输入内容'/>
                    </div>
                    <div className='ui-form-foot'>
                        <button type='submit' className='ui-btn ui-btn-success'>新增</button>
                    </div>
                </form>
            </div>
        );
    }
}

Create.defaultProps = {};

export default Create;

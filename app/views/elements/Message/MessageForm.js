import React from 'react';
// import moment from 'moment';

/*

    props传值：
        placeholder : 无内容时的提示信息,
        maxNum :      允许输入的最多字数        默认500字,
        height :      容器初始高度              默认40px
        maxHeight :   最大高度                  默认126px

*/

class MovieForm extends React.Component {
    constructor (props){
        super(props);

        this.state = {
            placeholder : this.props.placeholder || '点此输入内容',
            curLen : this.props.maxNum || 500,
            maxLen : this.props.maxNum || 500,
            maxHeight : this.props.maxHeight || 126,
            style : {
                height : this.props.height || 40,
                scroll : 'hidden'
            },
            initHeight : 0,
        }
    }
    newMsg(msg){

    }
    inputText = (e) =>{
        let target = e.target,
            scroll = 'hidden',
            maxLen = this.state.maxLen,
            initHeight = this.state.initHeight,
            maxHeight = this.state.maxHeight;

        //计算字符串长度
        let val = e.target.value,
            valLen = val.length;
        valLen > maxLen && ( val = val.substr(0, maxLen) ) && ( valLen = maxLen );

        //回显
        this.setState({
            val : val,
            curLen : maxLen - valLen,
            style : {
                height : initHeight,
                scroll : scroll
            }
        },function(){//回显后重新计算高度
            let scrollH = target.scrollHeight;
            let domH = initHeight;
            scrollH > initHeight && (domH = Math.ceil( (scrollH - initHeight) / 22) * 22 + initHeight); // 行数 * 行距 + 初始高度
            domH > maxHeight && (domH = maxHeight) && (scroll = 'scroll');
            this.setState({
                style : {
                    height : domH,
                    scroll : scroll
                }
            });
        });

    }
    componentDidMount(){
        //获取初始高度
        let initHeight = this.refs.msgTextarea.scrollHeight;
        this.setState({
            initHeight : initHeight,
            style : {
                height : initHeight,
                scroll : 'hidden'
            }
        })
    }
    render() {
        const { items } = this.props;
        return (
            <div className='ui-msg-form'>
                <form method='POST' action='/message/new/'>
                    <div className='ui-textarea'>
                        <span className='input-num'>{this.state.curLen}</span>
                        <textarea
                            ref='msgTextarea'
                            name='message[content]'
                            value={this.state.val}
                            placeholder={this.state.placeholder}
                            onInput={this.inputText}
                            onChange={this.inputText}
                            onBlur={this.inputText}
                            style={{ 
                                height : this.state.style.height + 'px',
                                overflowY : this.state.style.scroll
                            }}></textarea>
                    </div>
                    <div className='ui-btn-group right'>
                        <button className='ui-btn'>留言</button>
                    </div>
                </form>
            </div>
        );
    }
}
MovieForm.defaultProps = {};
MovieForm.PropsType = {
    items : React.PropTypes.object
}

export default MovieForm;

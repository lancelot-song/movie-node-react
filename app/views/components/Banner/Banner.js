require('./Banner.css');
import React from 'react';
import { Link } from 'react-router-dom';

class BannerSlider extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            spped : this.props.spped,
            current : 0,
            width : '100%',
            cssPrefix : ''
        }
    }
    turn(num){
        const self = this;
        const current = self.state.current;
        const len = self.props.banner.length;
        const spped = self.props.spped;

        if(num > 0){//下一张
            if(current===len-1){//当前已到尾处理
                self.setState({
                    spped : spped,
                    current : len
                });
                setTimeout(function(){
                    self.setState({
                        spped : 0,
                        current : 0
                    });
                }, spped*1000)
            }
            else{
                self.setState({
                    spped : spped,
                    current : current+1
                })
            }
        }
        else{//上一张
            if(current===0){//当前已到头处理
                self.setState({
                    spped : 0,
                    current : len
                });
                setTimeout(function(){
                    self.setState({
                        spped : spped,
                        current : len-1
                    })
                },50)
            }
            else{
                self.setState({
                    spped : spped,
                    current : current-1
                })
            }
        }

    }
    componentWillMount(){
        const css3 = {
            'transition':'',
            'OTransition':'-o-',
            'MozTransition':'-moz-',
            'WebkitTransition':'-webkit-'
        }
        const body = document.body;
        for(var i in css3){
            if(body.style[i]!==undefined){
                this.setState({
                    cssPrefix : css3[i]
                })
            }
        }
    }
    componentDidMount(){
        this.setState({
            width : this.refs.bannerSliderContent.clientWidth
        })
    }
    render() {
        let copyFirst = null;
        const sliders = this.props.banner.map((slider, index) =>{
            if(index===0){
                copyFirst = (
                    <li key={this.props.banner.length}>
                        <Link to={'/detail/'+slider._id} >
                            <img src={slider.movie.poster} alt={slider.movie.title} />
                            <p className='ui-hot-comment'>{slider.comment}</p>
                        </Link>
                    </li>
                )
            }
            return (
                <li key={index}>
                    <Link to={'/detail/'+slider._id} >
                        <img src={slider.movie.poster} alt={slider.movie.title} />
                        <p className='ui-hot-comment'>{slider.comment}</p>
                    </Link>
                </li>
            )
        });
        sliders.push(copyFirst);
        return (
            <div className='ui-layout'>
                <div className='ui-banner-slider' ref='bannerSliderContent'>
                    <ul 
                        className='ui-banner-slider-scroll'
                        style={{
                            transition : 'transform '+this.state.spped+'s ease',
                            transform : 'translate3d(' + (-this.state.width * this.state.current) + 'px,0,0)',
                            width : this.props.banner.length * 100 + 100+'%'
                        }}>
                        {sliders}
                    </ul>
                    <a href='javascript:;' onClick={this.turn.bind(this, -1)} className='ui-banner-slider-prev'></a>
                    <a href='javascript:;' onClick={this.turn.bind(this, 1)} className='ui-banner-slider-next'></a>
                </div>
            </div>
        );
    }
}

BannerSlider.defaultProps = {};
// BannerSlider.PropsType = {
//     banner : React.PropTypes.object
// }

export default BannerSlider;

require('./Banner.css');
import React from 'react';

class Banner extends React.Component {
    constructor (props){
        super(props);
    }
    render() {
        return (
            <div className='ui-layout'>
                <div className='ui-banner' ref='bannerSliderContent'>
                    <img src={this.props.banner} />
                </div>
            </div>
        )
    }
}

Banner.defaultProps = {};

// BannerSlider.PropsType = {
//     banner : React.PropTypes.object
// }

export default Banner;

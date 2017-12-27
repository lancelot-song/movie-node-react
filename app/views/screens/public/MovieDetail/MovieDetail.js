import React from 'react';

class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentDidMount(){
        const self = this;
    }
    render() {
        const { banner, list } = this.state;
        return (
            <div className='ui-content'>
                <div className='ui-layout'>
                    <div className='ui-article'>
                        <MovieInfo />
                        <MovieMark />
                        <MovieIntroduce />
                        <MoviePerformer />
                        <MovieImg />
                        <MoviePrize />
                        <MovieOther />
                        <MoviePrize />
                        <MovieComment />
                    </div>
                    <div className='ui-side'>
                        <SideRecommend />
                    </div>
                </div>
                {banner && <BannerSlider banner={banner} spped='.5' />}
                {list && <IndexList items={list} />}
            </div>
        );
    }
}

Index.defaultProps = {};

export default Index;

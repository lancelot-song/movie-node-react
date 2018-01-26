import React from 'react';
import { withRouter } from 'react-router';
import BannerSlider from 'components/Slider/BannerSlider';
import IndexList from 'elements/IndexList/IndexList';
import Page from 'components/Page/Page';

class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            banner : null,
            list : {
                items : null,
                maxPage : 0
            }
        }
    }
    loadList(pageNum){
        /* 电影列表*/
        const self = this;
        const listAction = '/json/index/list/' + pageNum;
        fetch(listAction,{
            method : 'GET'
        })
        .then(function(response){
            if(response.status > 400){
                throw new Error('App.js 请求数据失败')
            }
            return response.json();
        })
        .then(function(stories){
            self.setState({
                list : {
                    items : stories.movies,
                    maxPage : stories.maxPage
                }
            });
        });
    }
    componentDidMount(){
        const self = this;

        /* 电影推荐 */
        fetch('/json/movie/recommend',{
            method : 'GET',
            credentials: 'include'
        })
        .then(function(response){
            if(response.status > 400){
                throw new Error('App.js 请求数据失败')
            }
            return response.json();
        })
        .then(function(stories){
            self.setState({
                banner : stories
            });
        });

        let pageNum = this.props.location.search.split("page=")[1];
        pageNum ? 
        pageNum = pageNum.split("&")[0]
        : pageNum = 1;
        self.loadList( pageNum );
    }
    render() {
        const { banner, list } = this.state;
        return (
            <div className='ui-content'>
                {banner && <BannerSlider banner={banner} spped='.5' />}
                {list.items && <IndexList items={list.items} />}
                {list.maxPage && <Page curPage={this.props.match.params.id} maxPage={list.maxPage} />}
            </div>
        );
    }
}

Index.defaultProps = {};

export default withRouter(Index);

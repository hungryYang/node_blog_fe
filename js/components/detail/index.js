/*
日志详情组件
*/
require('./index.scss')
import React,{Component} from 'react'

export default 
  class DetailPanel extends Component{
    renderTitle(){
      let {title,category,_id,date} = this.props.detail
      return <div className='blog-head clearfix'>
                <h1 className="blog-title">
                  <a href={`/blog?id=${_id}`}>
                    {title}
                  </a>
                </h1>
                <h3 className="blog-author">
                  <span className="date">
                    发表于{date}
                  </span>
                  <span className="author">
                    by <a href="/about">hungryyang</a>
                  </span>
                </h3>
             </div>        
    }
    
    renderBlog(){
      let {detail} = this.props
      if(detail.content){
        return <div dangerouslySetInnerHTML={{__html:detail.content}}></div>
      }else{
        return <div>无内容</div>
      }
    }
    render(){
      let {detail} = this.props
      if(detail){
        return (
          <div className="blog-detail markdown">
            {this.renderTitle()}
            <div className="blog-content">
              {this.renderBlog()}
            </div>
            <h4 className="blog-category">
              <a href={`/category?name=${detail.category.id}`}>{detail.category.name}</a>
            </h4>
          </div>
        )
      }else{
        return null
      }
    }
  }
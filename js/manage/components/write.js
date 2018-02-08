import React,{Component} from 'react'
import {render} from 'react-dom'
import {categoryListApi,blogDetailApi} from '../ajax'
import {BlogWritePanel} from '../../components'

import marked from 'marked'
import highlight from 'highlight.js'
marked.setOptions({
  highlight: function (code) {
    return highlight.highlightAuto(code).value;
  }
});

import Dialog from './Dialog'

export default
class Write extends Component{
   constructor(){
    super();
    this.state={
        content:"",
        title:'',
        previewContent:"",
        category:{},
    }
  }
  componentDidMount(){
    let {blogId} = this.props
    if(blogId){
      blogDetailApi({id:blogId}).then(detail=>{
        if(detail){
          this.setState({
            content:detail.rawContent,
            category:detail.category,
            title:detail.title,
            previewContent:detail.content,
            blogId:detail._id
          })
        }
      })
    }
    categoryListApi().then(categoryList=>{
      console.log(categoryList)
      this.setState({categoryList})
    })
  }
  render(){
    return <BlogWritePanel {...this.state}/>
  }
}

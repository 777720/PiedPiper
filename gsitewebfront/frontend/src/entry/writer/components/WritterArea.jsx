import React from 'react'
import _ from 'lodash'
import axios from 'axios'
import styled from 'styled-components'
import { GoujilaEditor } from '../../common/components/GoujilaEditor/src/'
import WritterApp from '../apps/WritterApp';

const MarginDiv = styled.div`
  margin-left: 5px;
  margin-bottom: 5px;
`

class WritterArea extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      content: '',
      title: '',
    }
  }
  onMDValueChange = (value) => {
    this.setState({
      content: value,
    })
  }
  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  onPostArticle = () => {
    const { content, title } = this.state
    const article = {
      title,
      content,
    }
    axios.post("/api/writter/article", article).then((res) => {
      if(res.data.success) {
        console.log("ok");
      }
    })
  }
  render() {
    const { content, title } = this.state
    return (
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">标题</span>
          </div>
          <input
            value={title}
            id="title"
            className="form-control"
            type="text"
            onChange={this.onChange}
          />
        </div>
        <MarginDiv>
          <GoujilaEditor
            value={content}
            tab="edit"
            onValueChange={this.onMDValueChange}
            minHeight={400}
          />
        </MarginDiv>
        <MarginDiv>
          <button
            type="button"
            onClick={this.onPostArticle}
            className="btn btn-primary"
          >
            发布新的文章
          </button>
        </MarginDiv>
      </div>
    )
  }
}
export default WritterArea
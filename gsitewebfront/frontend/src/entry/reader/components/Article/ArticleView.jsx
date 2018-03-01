import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'
import axios from 'axios'
import { GoujilaMarked } from '../../../common/components/GoujilaEditor/src'
import { Replay } from 'SvgIcon'
import { Link } from 'react-router-dom'
import ClassificationView from '../SelfIntroduction/ClassificationView'


const ContainerDiv = styled.div`
  display: flex;
  align-items: flex-start;
`
const TitleH = styled.h1`
  padding-bottom: 0.3em;
  font-size: 2em;
  border-bottom: 1px solid #eaecef;
`
const TagDiv = styled.div`

`
const LinkReplay = styled(Link)`
  cursor: pointer;
  top: -13px;
  left: -13px;
  position: relative;
`
const ContentDiv = styled.div`
  flex: ${props => props.flex};
  margin-top: 25px;
  margin-bottom: 25px;
  margin-right: 10px;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 2px 5px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  padding: ${props => props.padding ? props.padding : "20px 25px"};
  border-bottom: 1px solid rgba(178, 186, 194, 0.15);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  >h2{
    font-size: 1.1em;
    padding-left: 20px;
    margin: 0;
    height: 45px;
    line-height: 45px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(178, 186, 194, 0.15);
    font-weight: normal;
  }
`
const WriterDiv = styled.div`
  padding-top: 25px;
`

class ArticleView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      article: {},
    }
  }
  componentDidMount() {
    const { params: { id } } = this.props.match
    axios.get(`/api/reader/article/${id}`).then((res) => {
      const result = res.data
      if(result.success) {
        this.setState({
          article: result.data,
        })
      }
    })
  }

  render() {
    const { article } = this.state
    console.log(article);
    const htmlContent = GoujilaMarked(_.isEmpty(article.content) ? "还没有" : article.content)
    return (
      <ContainerDiv className="container">
        <ContentDiv flex={4}>
          <LinkReplay to="/articles"><Replay size={24} /></LinkReplay>
          <TitleH>{article.title}</TitleH>
          <WriterDiv className="markdown-body" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </ContentDiv>
        <ContentDiv flex={2} padding="0px 0px">
          <h2>文章分类</h2>
          <ClassificationView />
        </ContentDiv>
      </ContainerDiv>
    )
  }

}

ArticleView.defaultPropTypes = {
}
ArticleView.propTypes = {
}
export default ArticleView
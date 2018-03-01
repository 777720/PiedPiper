import React from 'react'
import PropTypes from 'prop-types'
import  { Link } from 'react-router-dom'
import styled from 'styled-components'
import _ from 'lodash'
import TagBar from '../../common/TagBar'


const MarginDiv = styled.div`
  margin-bottom: 15px;
  border-bottom: 1px solid rgba(178, 186, 194, 0.15);
  background-color: white;
  padding-top: 25px;
  padding-buttom: 5px;
  padding-left: 25px;
  padding-right: 25px;
  
`

const PreDiv = styled.p`
  color: #a3a3a3;
  padding-top: 5px;
  padding-left: 5px;
  border-top: 1px solid rgba(178, 186, 194, 0.15);
`

const PreViewFooter = styled.div`
  display: flex;
  padding-bottom: 6px;
`
const Title = styled.h3`
  margin: 0 0 5px;
  font-size: 25px;
  font-weight: 700;
  transition: 0.3s all;
  color: #404040;
  :hover {
    color: #007fff;
  };
`
const LinkA = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #404040;
  :hover {
    text-decoration: none;
  };
`
const mapStateToProps = state => ({
  articleList: state.articleList
})

class ArticlePreview extends React.Component {
  
  render() {
    const { articlePre } = this.props
    if(_.isEmpty(articlePre.id)) {
      return null
    }
    return (
    <MarginDiv>
      <div>
        <LinkA to={`/article/${articlePre.id}`} onClick={() => { console.log('object'); }}>
          <Title>{articlePre.title}</Title>
        </LinkA>
          <TagBar updateTime={articlePre.updateTime} onlyShowUt />
          <PreDiv>
            {_.isEmpty(articlePre.contentPre) ? "还没有，代写......." : articlePre.contentPre}
          </PreDiv>
      </div>
      <PreViewFooter>
        <TagBar createTime={articlePre.createTime} />
      </PreViewFooter>
    </MarginDiv>
    )
  }
}
ArticlePreview.defaultPropTypes = {
  articlePre: {},
}
ArticlePreview.propTypes = {
  articlePre: PropTypes.objectOf(PropTypes.any)

}
export default ArticlePreview

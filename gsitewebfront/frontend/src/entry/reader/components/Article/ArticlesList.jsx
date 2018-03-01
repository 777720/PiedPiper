import React from "react"
import PropTypes from 'prop-types'
import ArticlePreview from './ArticlePreview'
import styled from 'styled-components'

const ContainerDiv = styled.div`
  margin-top: 25px;
`


class ArticlesList extends React.Component {
  render() {
    const { articlesList } = this.props
    return (
      <ContainerDiv className="container">
        {
          articlesList.map((item, index) => {
            const articlePre = {
              id: item.id,
              title: item.title,
              contentPre: item.contentPre,
              createTime: item.createTime,
              updateTime: item.updateTime,
            }
            return (
              <ArticlePreview
                key={index}
                articlePre={articlePre}
              />
            )
          })
        }
      </ContainerDiv>
    )
  }
}
ArticlesList.propTypes = {
  articlesList: PropTypes.arrayOf(PropTypes.any),
}
export default ArticlesList
import React from "React"
import PropTypes from 'prop-types'
import ArticlePreview from './ArticlePreview'

class ArticlesList extends React.Component {
  render() {
    const { articlesList } = this.props
    return (
      <div>
        {
          articleList.map((item, index) => {
            <ArticlePreview
              title={item.title}
              contentPre={item.contentPre}
              createTime={item.createTime}
              updateTime={item.updateTime}
              collection={item.collection}
              tag={item.tag}
            />
          })
        }
      </div>
    )
  }
}
ArticlesList.propTypes = {
  articlesList: PropTypes.arrayOf(PropTypes.any),
}
export default ArticlesList
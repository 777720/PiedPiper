import React from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList';

const ArticlePreview = (props) => {
  const { title, contentPre, tag, createTime, updateTime, collection } = props
  return (
    <div className="card">
      <div classNme="card-body">
        <h5 className="card-title">{title}</h5>
        <p class="card-text">
          {contentPre}
        </p>
      </div>
      <div className="card-footer">
        {`创建时间: ${createTime}|更新时间：${updateTime}|属于： ${collection}|`}
      </div>
    </div>
  )
}
ArticleList.defaultPropTypes = {
  title: "暂无标题",
  contentPre: "暂无内容预览",
  tag: ["null"],
  createTime: "暂无",
  updateTime: "暂无",
  collection: "暂无",
}
ArticlePreview.propTypes = {
  title: PropTypes.string,
  contentPre: PropTypes.string,
  tag: PropTypes.arrayOf(PropTypes.string),
  createTime: PropTypes.string,
  updateTime: PropTypes.string,
  collection: PropTypes.string,

}
export default ArticlePreview

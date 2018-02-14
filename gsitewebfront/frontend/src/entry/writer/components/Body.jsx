import React from 'react'
import WritterArea from './WritterArea';

const Body = (props) => {
  return (
    <div className="container">
      <button type="button" className="btn btn-primary btn-lg">发布新的文章</button>
      <WritterArea />
    </div>
  )
}

export default Body
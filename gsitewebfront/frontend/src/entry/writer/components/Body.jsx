import React from 'react'
import WritterArea from './WritterArea';
import FunctionArea from './FunctionArea'
import styled from 'styled-components'

const Body = (props) => {
  return (
    <div className="container">
      <FunctionArea />
      <WritterArea />
    </div>
  )
}

export default Body
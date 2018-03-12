import React from 'react'
import WritterArea from './WritterArea';
import FunctionArea from './FunctionArea'
import AboutMeArea from './AboutMeArea'
import styled from 'styled-components'

const Body = (props) => {
  return (
    <div className="container">
      <FunctionArea />
      <WritterArea />
      <AboutMeArea />
    </div>
  )
}

export default Body
import React from 'react'
import styled from 'styled-components'

const ConinterDiv = styled.div`
  background-image: linear-gradient(90deg,#33b2ce,#1e67b9);
  min-height: 20%;
`
const Banner = (props) => {
  const { children } = props
  return (
    <ConinterDiv>
      {children}
    </ConinterDiv>
  )
}
export default Banner
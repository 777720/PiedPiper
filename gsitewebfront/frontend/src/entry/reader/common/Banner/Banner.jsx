import React from 'react'
import styled from 'styled-components'

const ConinterDiv = styled.div`
  background: linear-gradient(to right,#003973 0,#e5e5be 100%);;
  height: 100%;
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
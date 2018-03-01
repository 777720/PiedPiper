import React from 'react'
import styled from 'styled-components'

const FootDiv = styled.div`
  background-color: #202020;
  color: white;
  text-align: center;
`

const Footer = (props) => {
  return (
    <FootDiv>
      Author by geek720. 自豪地采用springboot+react. ♥ Do you a true fans？ . 
    </FootDiv>
  )
}
export default Footer
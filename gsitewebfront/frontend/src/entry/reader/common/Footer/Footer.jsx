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
      Copyright © 2018 by nowamagic.net. All Rights Reserved. ♥ Do have faith in what you're doing. 
    </FootDiv>
  )
}
export default Footer
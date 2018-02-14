import React from 'react'
import styled from 'styled-components'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import Body from '../components/Body'

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

class GsiteApp extends React.Component {
  render() {
    return (
      <ContainerDiv>
          <Header />
          <Body />
          <Footer />
      </ContainerDiv>
    )
  }
}
export default GsiteApp

import React from 'react'
import styled from 'styled-components'
import Banner from '../common/Banner/Banner'

const ContainerDiv = styled.div`
  flex: 1;
`

class body extends React.Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Banner>
        
        </Banner>
        <ContainerDiv className="container">
         123
        </ContainerDiv>
      </div>
    )
  }
}

export default body
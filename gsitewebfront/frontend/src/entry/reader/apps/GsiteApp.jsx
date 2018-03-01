import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import Body from '../components/Body'
import rootReducer from '../reducers'


const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f4f5f5;
  min-height: 100%;
`
const mapStateToProps = (state) => ({
  articleList: state.articleList
})

@connect(mapStateToProps)
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

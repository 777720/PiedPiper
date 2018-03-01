import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Banner from '../common/Banner/Banner'
import ArticlesList from '../components/Article/ArticlesList'
import ArticleView from '../components/Article/ArticleView'
import WelcomeView from './WelcomeView'

const ContainerDiv = styled.div`
  flex: 1;
  background: linear-gradient(to right,#003973 0,#e5e5be 100%);
`
const mapStateToProps = state => ({
  articleList: state.articleList,
})

@connect(mapStateToProps)
class body extends React.Component {
  render() {
    console.log(this.props);
    const { articleList } = this.props
    return (
        <ContainerDiv>
          <Router>
            <Switch>
              <Route path="/article/:id" component={ArticleView} />
              <Route path="/articles" render={() => <ArticlesList articlesList={articleList} />} />
              <Route path="/" component={WelcomeView} />
            </Switch>
          </Router>
        </ContainerDiv>
    )
  }
}



export default body
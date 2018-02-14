import React from 'react'
import PropTypes from 'prop-types'
import Body from '../components/Body'
import Header from '../components/Header'

export default class WritterApp extends React.Component {
  render() {
    const { writter } = this.props
    return (
      <div>
        <Header writterName={writter.name}/>
        <Body />
      </div>
    )
  } 
}

WritterApp.propTypes = {
  writter: PropTypes.objectOf(PropTypes.any),
}
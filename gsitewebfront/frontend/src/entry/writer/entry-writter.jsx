import ReactDom from 'react-dom'
import React from 'react'
import axios from 'axios'
import _ from 'lodash'
import WritterApp from './apps/WritterApp'
import LoginView from './components/LoginView'

axios.get("/api/writter/self").then((res) => {
  const result  = res.data
  if (result.success) {
    const { id, writtername } = result.data
    const writterObject = {
      name: writtername,
      id,
    }
      ReactDom.render(<WritterApp writter={writterObject} />, document.getElementById('app'))
  } else {
    ReactDom.render(<LoginView />, document.getElementById('app'))
  }
})





import ReactDom from 'react-dom'
import React from 'react'
import axios from 'axios'
import WritterApp from './apps/WritterApp'
import LoginView from './components/LoginView'

axios.get("/api/writter/self").then((res) => {
  const result  = res.data
  const writter = result.success ? result.data : {}
  const { id, writtername } = writter
  const writterObject = {
    name: writtername,
    id,
  }
  if (id) {
    ReactDom.render(<WritterApp writter={writterObject} />, document.getElementById('app'))
  } else {
    ReactDom.render(<LoginView />, document.getElementById('app'))
  }
})





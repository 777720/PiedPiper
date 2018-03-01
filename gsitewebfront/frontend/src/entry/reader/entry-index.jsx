import ReactDom from 'react-dom'
import React from 'react'
import GsiteApp from './apps/GsiteApp'
import axios from 'axios'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import configureStore from './store/configureStore.prod'

axios.get('/api/reader/articles').then((res) => {
  const result = res.data
  if (result.success) {
    const articleList = result.data
    const store = configureStore({ articleList })
    ReactDom.render(<App store={store} />, document.getElementById("app"))
  }
})

const App =({ store }) =>  (
  <Provider store = {store}>
    <GsiteApp />
  </Provider>
)

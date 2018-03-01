console.log("处于dev环境 ------" + process.env.NODE_ENV);

import { createStore } from 'redux';
import rootReducer from '../reducers'

export default function configureStore(initialStore) {
  const store = createStore(rootReducer, initialStore)
  console.log("处于dev环境 ------" + process.env.NODE_ENV);
  if (module.hot) {
    module.hot.accept('../reducers/', () => (
      store.replaceReducer(require('../reducers/').default)
    ))
    return store
  }
}
import { createStore } from 'redux';
import rootReducer from '../reducers'
console.log("处于prod环境 ------" + process.env.NODE_ENV);

export default function configureStore(initialStore) {
  const store = createStore(rootReducer, initialStore)
  return store
}
  
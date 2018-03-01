import { combineReducers } from 'redux'
import articleList from './articleListReducer'

const rootReducer = combineReducers({
  articleList,
})

export default rootReducer
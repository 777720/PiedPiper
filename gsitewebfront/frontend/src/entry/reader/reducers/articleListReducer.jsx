import _ from 'lodash'

const _reducer = {

}
const articleListReducer = function(articleList = [], action) {
  if(_.has(_reducer, action.type)) {
    return _reducer[action.type](articleList, action)
  }
  return articleList
}
export default  articleListReducer
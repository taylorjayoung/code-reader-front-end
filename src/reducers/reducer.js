import { combineReducers } from 'redux'
import displayReducer from './displayReducer'
import languageReducer from './languageReducer'
import skillReducer from './skillReducer'
import categoryReducer from './categoryReducer'


const appReducer = combineReducers({
  display: displayReducer,
  language: languageReducer,
  skill: skillReducer,
  category: categoryReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined
  }
  return appReducer(state, action)
}




export default rootReducer

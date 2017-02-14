import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducer as files } from './files'

const store = createStore(
  combineReducers({
    files,
  }),
  undefined,
  composeWithDevTools(
    applyMiddleware(
      thunk,
    )
  )
)

export default store

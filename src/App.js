import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'

import store from './state/store'
import Files from './containers/Files'

import parseFiles from './utils/parseFiles'

const data = require('!!raw-loader!../sampledata')
const parsed = parseFiles(data)

store.dispatch({
  type: 'SET_OPEN_FILES',
  payload: parsed,
})

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Files />
      </Provider>
    )
  }
}

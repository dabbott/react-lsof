import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createStyles from 'react-styles-provider'

import { File } from '../components'

// import { exampleActions } from '../state/actions'

@createStyles({
  container: {
    padding: 20,
    backgroundColor: 'whitesmoke',
  },
  item: {
    color: 'black',
  },
  button: {
    color: 'skyblue',
    cursor: 'pointer',
  },
})
@connect(
  state => ({
    files: state.files,
  }),
  {
    // addItem: exampleActions.add,
  },
)
export default class Files extends PureComponent {
  renderFile = (file) => {
    const {processID, processCommandName} = file

    return (
      <File
        key={processID}
        processID={processID}
        processCommandName={processCommandName}
      />
    )
  }

  render() {
    const {files, styles} = this.props

    const sorted = files.sort(
      (a, b) => {
        if (a.processCommandName < b.processCommandName) return -1
        if (a.processCommandName === b.processCommandName) return 0
        return 1
      }
    )

    return (
      <div style={styles.container}>
        {sorted.map(this.renderFile)}
      </div>
    )
  }
}

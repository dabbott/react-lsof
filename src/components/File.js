import React, { PureComponent } from 'react'
import createStyles from 'react-styles-provider'

@createStyles({
  container: {
    padding: 20,
    backgroundColor: 'whitesmoke',
    display: 'flex',
    flexDirection: 'row',
  },
  field: {
    width: 100,
  },
})
export default class File extends PureComponent {
  render() {
    const {
      styles,
      processID,
      processCommandName,
    } = this.props

    return (
      <div style={styles.container}>
        <div style={styles.field}>
          {processID}
        </div>
        <div>
          {processCommandName}
        </div>
      </div>
    )
  }
}

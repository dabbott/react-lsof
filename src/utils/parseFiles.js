
export default (data) => {
  const lines = data.split('\n')

  const records = []
  let record = null

  lines.forEach((line) => {
    const type = line.substr(0, 1)
    const payload = line.substr(1)

    switch (type) {
      case 'p': {
        record = {
          processID: payload,
        }
        records.push(record)
        break
      }
      case 'c': {
        record.processCommandName = payload
        break
      }
      default:
        break
    }
  })

  return records
}

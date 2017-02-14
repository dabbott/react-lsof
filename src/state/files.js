export const types = {
  SET_OPEN_FILES: 'SET_OPEN_FILES',
}

export const actionCreators = {
  setOpenFiles: (files) => {
    return {type: types.SET_OPEN_FILES, payload: files}
  },
}

const initialState = []

const handlers = {
  [types.SET_OPEN_FILES]: (state, files) => {
    return files
  },
}

export const reducer = (state = initialState, action) => {
  const {type, payload, error, meta} = action

  const handler = handlers[type]

  return handler ? handler(state, payload, error, meta) : state
}

var initialState = [
  {
    name: 'Room 1',
    type: 0,
  },
  {
    name: 'Room 2',
    type: 1,
  }
]
export default function reducer(state=initialState, action) {
  switch (action.type) {
    case "NEW_ROOM": {
      return {...state, user: state.push(action.payload)}
    }
  }
  return state
}

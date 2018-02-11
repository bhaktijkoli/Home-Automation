var initialState = [
  {
    name: 'Hall 1',
    type: 0,
  },
  {
    name: 'Bedroom 1',
    type: 1,
  },
  {
    name: 'Kitchen',
    type: 2,
  },
]
export default function reducer(state=initialState, action) {
  switch (action.type) {
    case "NEW_ROOM": {
      return {...state, user: state.push(action.payload)}
    }
  }
  return state
}

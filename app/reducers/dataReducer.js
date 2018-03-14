var initialState = {
  name: '',
  controllers: [],
  rooms: [],
  devices:[],
}
export default function reducer(state=initialState, action) {
  switch (action.type) {
    case "NEW_ROOM": {
      return {...state, user: state.push(action.payload)}
    }
    case "SET_DATA": {
      if(!action.payload.controllers) action.payload.controllers = [];
      if(!action.payload.rooms) action.payload.rooms = [];
      return {...state, name: action.payload.name, controllers: action.payload.controllers, rooms: action.payload.rooms}
    }
  }
  return state
}

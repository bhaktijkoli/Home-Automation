var initialState = {
  token: '',
  homes: [],
  loading: true,
  navigation: null,
}
export default function reducer(state=initialState, action) {

  switch (action.type) {
    case "SET_TOKEN": {
      return {...state, token: action.payload}
    }
    case "SET_HOMES": {
      return {...state, homes: action.payload}
    }
    case "LOADED": {
      return {...state, loading: false}
    }
    case "SET_NAVIGATION": {
      return {...state, navigation: action.payload}
    }
  }

  return state
}

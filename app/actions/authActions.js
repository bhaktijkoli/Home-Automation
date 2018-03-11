import {AsyncStorage} from 'react-native';
module.exports.setNavigation = (navigation) => {
  return {type: 'SET_NAVIGATION', payload: navigation}
}
module.exports.setLoading = (loading) => {
  return {type: 'SET_LOADING', payload: loading}
}
module.exports.setToken = (token) => {
  return {type: 'SET_TOKEN', payload: token}
}
module.exports.setHomes = (homes) => {
  return {type: 'SET_HOMES', payload: homes}
}
module.exports.saveToken = (token) => {
  AsyncStorage.setItem('authtoken', token)
}
module.exports.getToken = () => {
  return AsyncStorage.getItem('authtoken');
}

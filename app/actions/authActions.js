module.exports.setNavigation = (navigation) => {
  return {type: 'SET_NAVIGATION', payload: navigation}
}
module.exports.setToken = (token) => {
  return {type: 'SET_TOKEN', payload: token}
}
module.exports.setHomes = (homes) => {
  return {type: 'SET_HOMES', payload: homes}
}

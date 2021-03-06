module.exports.setData = (data) => {
  return {type: 'SET_DATA', payload: data}
}
module.exports.getRoomIcon = (type) => {
  /*
  0- Hall,
  1- Bedroom,
  2- Kitchen,
  3- Bathroom
  6- Garage
  7- Office
  */
  switch (type) {
    case 0:
    return "tv"
    case 1:
    return "bed"
    case 2:
    return "cutlery"
    case 3:
    return "bath"
    case 6:
    return "car"
    case 7:
    return "briefcase"
    default:
    return "bed"
  }
}
// export function newRoom(name, type) {
//   var data =   { name: name, type: type };
//   return { type: 'NEW_ROOM', payload: data };
// }

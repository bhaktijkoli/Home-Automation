import axios from 'axios';
var token = null;
var home = null;
module.exports.useAuth = (newtoken, newhome) => {
  token=newtoken;
  home=newhome;
}
module.exports.makePost = (url, data) => {
  return axios({
    method: 'post',
    url: url,
    data: data,
  });
}
module.exports.makePostAuth = (url, data) => {
  return axios({
    method: 'post',
    headers: {Authorization:'Bearer ' + token, Home:home},
    url: url,
    data: data,
  });
}

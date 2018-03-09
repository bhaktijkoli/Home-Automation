import axios from 'axios';

export function makePost(url, data) {
  return axios({
    method: 'post',
    url: url,
    data: data,
  });
}

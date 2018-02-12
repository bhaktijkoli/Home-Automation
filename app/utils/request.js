import axios from 'axios';

export function makePost(url, data) {
  return axios.post(url, data);
}

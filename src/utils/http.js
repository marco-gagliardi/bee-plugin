import axios from 'axios'

const DEFAULT_PARAMS = {};
const DEFAULT_OPTIONS = { headers: {'Content-Type': 'application/json'} };

export const makeRequest = (method = 'get', url, options = {}) => {
  options = {
    ...DEFAULT_OPTIONS,
    ...options,
    params: {...DEFAULT_PARAMS, ...options.params}
  }
  return axios({url, method, ...options})
    .then(response => response.data)
    .catch(error => {
      return Promise.reject(error.response);
    })
}
import axios from 'axios';
import { decamelizeKeys } from 'humps';
import { passUrlQueryParams } from '../../commons';

const API_BASE = 'https://conduit.productionready.io/api';

axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.xsrfCookieName = 'XSRF-TOKEN';

let token = null;

export const setToken = (_token) => { token = _token };

export const get = ({ url, params }) => {
  const _url = passUrlQueryParams(url, params);
  let headers = {};
  if (token) {
    headers = { 'Authorization': `Token ${token}` };
  }
  const endpoint = API_BASE + _url;
  console.log(`API Call ${endpoint} with params ${JSON.stringify(decamelizeKeys(params))}`);
  return axios.get(endpoint, { headers });
};

export const post = ({ url, params }) => {
  const endpoint = API_BASE + url;
  const data = params;
  let headers = {};
  if (token) {
    headers = { Authorization: `Token ${token}` };
  }
  console.log(`API Call ${endpoint} with params ${JSON.stringify(decamelizeKeys(data))}`);
  return axios.post(endpoint, data, { headers });
};

export const put = ({ url, params }) => {
  const endpoint = API_BASE + url;
  const data = params;
  let headers = {};
  if (token) {
    headers = { Authorization: `Token ${token}` };
  }
  console.log(`API Call ${endpoint} with params ${JSON.stringify(decamelizeKeys(data))}`);
  return axios.put(endpoint, data, { headers });
};

export const patch = ({ url, params }) => {
  const endpoint = API_BASE + url;
  const data = params;
  let headers = {};
  if (token) {
    headers = { Authorization: `Token ${token}` };
  }
  console.log(`API Call ${endpoint} with params ${JSON.stringify(decamelizeKeys(data))}`);
  return axios.patch(endpoint, data, { headers });
};

export const del = ({ url, params }) => {
  const endpoint = API_BASE + url;
  const data = params;
  let headers = {};
  if (token) {
    headers = { Authorization: `Token ${token}` };
  }
  console.log(`API Call ${endpoint} with params ${JSON.stringify(decamelizeKeys(data))}`);
  return axios.delete(endpoint, data, { headers });
};

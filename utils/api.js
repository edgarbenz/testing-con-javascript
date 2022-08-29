const axios = require('axios');

const BASE_URL = 'http://httpbin.org/';

const succesfulRequest = () => {
  return axios.get(`${BASE_URL}/status/200`); //esto regresa una promise que se va a resolver satisfactoriamente
}

const failedRequest = () => {
  return axios.get(`${BASE_URL}/status/401`); //esto regresa una promise que no se va resolver satisfactoriamente
}

module.exports = {
  succesfulRequest,
  failedRequest
}
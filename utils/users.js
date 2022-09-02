// AXIOS REAL CON SU LLAMADA REAR A UN URL
const axios = require('axios');
const ENDPOINT = 'https://jsonplaceholder.typicode.com';

class User {
  static all() {
    return axios.get(`${ENDPOINT}/users`).then(response => response.data);
  }

  static create(user) {
    return axios.post(`${ENDPOINT}/users`, user).then(response => response.data)
  }
}

module.exports = User;


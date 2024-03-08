import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://65e740db53d564627a8e587c.mockapi.io',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getUsers() {
    return apiClient.get('/users')
  }
};
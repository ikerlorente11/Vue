import CryptoJS from 'crypto-js';
import axios from 'axios';

const timestamp = Date.now();
const apiKey = 'e33a6895f17ddc15af383dd535afabb4';
const privateKey = '1139fb7519887b0be5352c0e32854df980c519f1';
const hash = CryptoJS.MD5(timestamp + privateKey + apiKey);

const apiClient = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  params: {
      'ts': timestamp,
      'apikey': apiKey,
      'hash': hash
  },
});

export default {
  getCharacters() {
    return apiClient.get('/characters')
  }
};
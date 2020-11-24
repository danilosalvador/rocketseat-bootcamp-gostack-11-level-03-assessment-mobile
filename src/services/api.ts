import axios from 'axios';

const api = axios.create({
  baseURL: 'http://b2f5f34dd75d.ngrok.io',
});

export default api;

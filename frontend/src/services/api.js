// api.js (Axios API Setup)

import axios from 'axios';

// Create an instance of Axios with the base URL for the backend
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;


// Since the backend API is set up with routes like GET /properties, we’ll need to use Axios for the communication.
// api.js (Service for Axios calls)
// Place this in the /services directory:
// api.js (Axios API Setup)

import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to fetch properties
export const fetchProperties = async () => {
  try {
    const response = await api.get('/properties');
    return response.data;
  } catch (error) {
    console.error('Error fetching properties', error);
    throw error;
  }
};

// Function to login user
export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in', error);
    throw error;
  }
};

// Add more API methods as needed...
export default api;


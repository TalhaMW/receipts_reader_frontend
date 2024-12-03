// src/axiosInstance.js
import axios from 'axios';

// Create an Axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: "https://16.170.219.74/api/v1", // Replace with your API's base URL
  headers: {
    'Content-Type': 'application/json',
    // You can add authorization token or other default headers here
    // 'Authorization': `Bearer ${yourToken}`,
  },
});

export default axiosInstance;

import axios from 'axios';

const api = axios.create({
  baseURL: "https://627351796b04786a090457f0.mockapi.io/",
});

export default api;
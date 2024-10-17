import axios from 'axios';
const env = import.meta.env;

export default axios.create({
  baseURL: env.VITE_BASE_URL,
});

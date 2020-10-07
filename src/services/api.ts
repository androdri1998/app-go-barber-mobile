import axios from 'axios';
import config from '../utils/config';

const api = axios.create({
  baseURL: config.base_api_url,
});

export default api;

import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: '',
    timeout: 30000,
    headers: {'Content-Type': 'application/json'}
});
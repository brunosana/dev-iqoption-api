import axios from 'axios';

export const api = axios.create({
    baseURL: '',
});

export const authApi = axios.create({
    baseURL: 'https://auth.iqoption.com/api/v2',
});

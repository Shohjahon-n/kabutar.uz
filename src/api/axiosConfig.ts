import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:1111/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
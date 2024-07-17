import axios from 'axios';

const postUser = axios.create({
    baseURL: 'http://localhost:1111/',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default postUser;
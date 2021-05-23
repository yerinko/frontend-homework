import axios from "axios";

const API_SERVER_HOST = 'https://ably-frontend-interview-server.vercel.app';

const api = axios.create({
    baseURL: API_SERVER_HOST,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000,
});

export default api;


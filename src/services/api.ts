import axios from "axios";

const api = axios.create({
    baseURL:'http://172.22.160.1:3366'
});

export {api};
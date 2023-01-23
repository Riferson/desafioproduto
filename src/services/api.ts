import axios from "axios";

const api = axios.create({
    baseURL:'http://172.26.128.1:3366'
});

export {api};
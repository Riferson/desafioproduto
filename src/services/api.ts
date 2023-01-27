import axios from "axios";

const api = axios.create({
  baseURL: "http://172.18.0.110:3004",
  headers: { "Content-Type": "application/json" },
});

export { api };

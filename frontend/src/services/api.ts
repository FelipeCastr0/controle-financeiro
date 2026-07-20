import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5125"
});

export default api;
import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.63:2022/api",
  headers: { "X-Custom-Header": "OpenMeteo" },
});

export default api;

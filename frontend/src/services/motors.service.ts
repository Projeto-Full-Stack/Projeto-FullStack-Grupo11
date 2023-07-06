import axios from "axios";

const motorsApi = axios.create({
  baseURL: "https://grupo-11-projeto-fullstack.onrender.com",
  timeout: 10000,
});

export default motorsApi;

import axios from "axios";

const carsApi = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com",
  timeout: 10000,
});

export default carsApi;

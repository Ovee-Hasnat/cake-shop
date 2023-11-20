import axios from "axios";
import Cookies from "js-cookie";

// const BASE_URL = "http://localhost:5000/api/";
const BASE_URL = "https://ric-server.onrender.com/api/";

let TOKEN = Cookies.get("token");

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: TOKEN },
});

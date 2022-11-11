import axios from "axios";

export const api = axios.create({
  baseURL: "https://frillaapi.herokuapp.com/",
  timeout: 5000,
});

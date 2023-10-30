import axios from "axios";
import "dotenv";
export const API = axios.create({
  baseURL: "http://localhost:3000/",
});

export const getAllItemsAPI = () => API.get(`items/`);
export const addNewItemsAPI = (data) => API.post(`items/`, data);

import axios from "axios";

// const token = localStorage.getItem("adminToken")
//   ? localStorage.getItem("adminToken")
//   : null;
const baseURL = "http://localhost:5000";

export const apiRequest = axios.create({
  baseURL: baseURL,
});

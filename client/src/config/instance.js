import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));
export const token = user ? user.token : null;
const instance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    authorization: token,
    "Content-Type": "application/json",
  },
});
export default instance;

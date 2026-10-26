import axios from "axios";

const api = axios.create({
    baseURL: "https://dummyjson.com/products",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});

export default api;
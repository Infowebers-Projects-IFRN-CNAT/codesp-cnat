import axios  from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_PATH+"/api/",
    withCredentials: true
});

export default api;
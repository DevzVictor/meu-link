import axios from "axios";

export const key =  "e3202bfca5e013989f5d10a2ac7278b7e2d05e10"

const api = axios.create({
    baseURL: "https://api-ssl.bitly.com/v4",
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;
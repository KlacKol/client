import axios from "axios";
import LocalStorageService from "../Services/LocalStorageService";


export const Interceptor = () => {
    axios.interceptors.request.use(
        config => {
            const token = LocalStorageService.getAccessToken();
            if (token) {
                config.headers['Authorization'] = 'Bearer ' + token;
            }
            return config;
        },
        error => Promise.reject(error)
        );

    axios.interceptors.response.use((response) => {
        return response
    }, error => {
        if (error.response.status === 401) {
            alert('aye')
        }
        return Promise.reject(error)
    })
};
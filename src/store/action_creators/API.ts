import * as axios from "axios";
import {AxiosRequestConfig} from "axios";

const $host = axios.default.create({
    baseURL: process.env.REACT_APP_API_URL
})
const $authHost = axios.default.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = localStorage.getItem("accessToken");
    if (token != null) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
        }
    }
        return config;
}
$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
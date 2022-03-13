import * as axios from "axios";

const $host = axios.default.create({
    baseURL: process.env.REACT_APP_API_URL
})
const $authHost = axios.default.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = (config:any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
}
$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
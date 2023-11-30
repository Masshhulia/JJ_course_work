import {$authHost, $host} from "./index";
import { jwtDecode } from "jwt-decode";

// userApi.js
export const registration = async (name, last_name, email, password) => {
    const {data} = await $host.post('api/user/registration', {name, last_name, email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}


export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}


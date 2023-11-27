import { $authHost } from "./index";
import { jwtDecode } from "jwt-decode";

export const getAccountInfo = async () => {
    try {
        const { data } = await $authHost.get('api/account/info');
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to get account info');
    }
}

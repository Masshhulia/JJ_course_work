import { $authHost } from "./index";

export const getAccountInfo = async () => {
    try {
        const { data } = await $authHost.get('api/account/info');
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to get account info');
    }
}
export const getAllUsers = async () => {
    try {
        const { data } = await $authHost.get('api/account/rating');
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to get all users');
    }
}


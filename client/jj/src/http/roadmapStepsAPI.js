// roadmapStepsAPI.js
import { $authHost } from "./index";

export const getStepsFromDatabase = async () => {
  try {
    const { data } = await $authHost.get('api/frontend/steps');
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to get steps from the database');
  }
};

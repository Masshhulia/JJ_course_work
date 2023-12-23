// roadmapStepsAPI.js
import { $host } from "./index";

export const getStepsFromDatabase = async () => {
  try {
    const { data } = await $host.get('api/frontend/steps');
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to get steps from the database');
  }
};

import { $host } from "./index";

export const getStepsFromDatabase = async () => {
  try {
    const { data } = await $host.get('api/frontend/steps');
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to get steps from the database');
  }
};

export const getRoadmapsNamesFromDatabase = async () => {
  try {
    const { data } = await $host.get('api/frontend/rmnames'); // Убедитесь, что путь совпадает с вашим маршрутом
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to get roadmaps names from the database');
  }
};

export const getRoadmapsNamesByID = async (id) => {
  try {
    const { data } = await $host.get(`api/frontend/rmnames/${id}`); // Исправлено: используйте обратные кавычки для шаблонной строки
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to get roadmaps names from the database');
  }
};
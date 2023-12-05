import { $authHost } from "./index";

export const getRoadmapPageFromDatabase = async (roadmap_ID) => {
  try {
    const { data } = await $authHost.get(`api/rmpages/${roadmap_ID}`);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to get roadmap page from the database');
  }
};

export const getAllRoadmapPagesFromDatabase = async () => {
  try {
    const { data } = await $authHost.get('api/rmpages');
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to get roadmap pages from the database');
  }
};

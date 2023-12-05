import { $authHost } from "./index";

export const getAllLinksFromDatabase = async () => {
  try {
    const { data } = await $authHost.get('api/rmlinks/links');
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to get links from the database');
  }
};
export const getLinkByIdFromDatabase = async (linkId) => {
  try {
    const { data } = await $authHost.get(`api/rmlinks/links/${linkId}`);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to get link by ID from the database');
  }
};

export const getLinksForPageFromDatabase = async (pageID) => {
  try {
    const { data } = await $authHost.get(`api/rmlinks/links/page/${pageID}`);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to get links for the specified page from the database');
  }
};
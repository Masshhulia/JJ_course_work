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

export const createLink = async (linkData) => {
  try {
      const response = await $authHost.post('api/rmlinks/links', linkData);
      return response.data;
  } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create link');
  }
};

export const updateLink = async (linkId, linkData) => {
  try {
      const response = await $authHost.put(`api/rmlinks/links/${linkId}`, linkData);
      return response.data;
  } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update link');
  }
};
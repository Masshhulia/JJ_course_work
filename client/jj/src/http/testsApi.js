// testsApi.js
import { $host, $authHost } from './index';

export const getTests = async () => {
  const response = await $host.get('/api/tests/tests');
  return response.data;
};

export const getTestById = async (testId) => {
  const response = await $authHost.get(`/api/tests/tests/${testId}`); // Исправлено
  localStorage.setItem('testId', testId); 
  return response.data;
};

export const createTest = async (testData) => {
  try {
      const response = await $authHost.post('/api/tests/tests', testData);
      return response.data;
  } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create test');
  }
};

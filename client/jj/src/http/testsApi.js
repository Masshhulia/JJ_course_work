// testsApi.js
import { $host } from './index';

export const getTests = async () => {
  const response = await $host.get('/api/tests/tests');
  return response.data;
};

export const getTestById = async (testId) => {
  const response = await $host.get(`/api/tests/tests/${testId}`);
  return response.data;
};

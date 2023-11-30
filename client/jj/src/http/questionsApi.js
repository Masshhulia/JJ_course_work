// api.js

import { $host } from './index';

export const getQuestions = async () => {
  const response = await $host.get('/api/quest/questions');
  return response.data;
};
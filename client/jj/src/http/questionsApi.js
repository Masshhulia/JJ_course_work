// api.js

import { $host, $authHost } from './index';

export const getQuestions = async () => {
  const response = await $host.get('/api/quest/questions');
  return response.data;
};

export const createQuestion = async (questionData) => {
  const response = await $authHost.post('/api/quest/questions', questionData);
  return response.data;
};

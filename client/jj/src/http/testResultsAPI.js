import {$authHost} from "./index";

export const fetchTestResults = async (userId, testId) => {
  const { data } = await $authHost.get(`/api/testresults/results/${userId}?testId=${testId}`);
  return data;
};


import {$authHost} from "./index";

export const fetchTestResults = async (userId) => {
  const { data } = await $authHost.get(`/api/testresults/results/${userId}`);
  return data;
};


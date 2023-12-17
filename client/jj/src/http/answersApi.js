import { $authHost } from "./index";

export const submitTestResults = async (testId, selectedAnswers) => {
  try {
    const requestBody = {
      answers: selectedAnswers.map((selectedOptions, questionIndex) => ({
        questionIndex: questionIndex + 1, // Assuming question indices start from 1
        selectedOptions: selectedOptions.map(option => ({
          question_ID: option.question_ID,
          option_ID: option.option_ID
        })),
        testId: testId,
      })),
    };

    const response = await $authHost.post('/api/questions/testresults', requestBody);

    // Return the test results
    return response.data;
  } catch (error) {
    // Handle errors when sending the request
    throw new Error('Error submitting test results:', error.message);
  }
};

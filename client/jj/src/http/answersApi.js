import { $authHost } from "./index";

export const submitTestResults = async (testId, selectedAnswers) => {
  try {
    const requestBody = {
      answers: selectedAnswers.map((selectedOptions, questionIndex) => ({
        questionIndex: questionIndex + 1, 
        selectedOptions: selectedOptions.map(option => ({
          question_ID: option.question_ID,
          option_ID: option.option_ID
        })),
        testId: testId,
      })),
    };

    const response = await $authHost.post('/api/questions/testresults', requestBody);
    return response.data;
  } catch (error) {
    
    throw new Error('Error submitting test results:', error.message);
  }
};

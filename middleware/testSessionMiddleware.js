const { TestResults, Questions, Options } = require('../models/models');
const QuizController = require('../controllers/questionsController');

const saveUserAnswers = async (req, res, next) => {
  try {
    const { answers } = req.body;

    if (!Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({ error: 'Invalid request format' });
    }

    req.userAnswers = req.userAnswers || [];

    answers.forEach(answer => {
      const { questionIndex, selectedOptions, testId } = answer;

      if (!questionIndex || !selectedOptions || !testId) {
        console.error('Invalid answer format:', answer);
        return res.status(400).json({ error: 'Invalid answer format' });
      }
      const formattedSelectedOptions = selectedOptions.map(optionId => ({ option_ID: optionId }));

      req.userAnswers.push({ questionId: questionIndex, selectedOptions: formattedSelectedOptions, testId });
    });

    console.log('Saved user answers:', req.userAnswers);

    next();
  } catch (error) {
    console.error('Error in saveUserAnswers:', error);
    res.status(500).send('Internal Server Error');
  }
};


const calculateTestResult = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const userAnswers = req.userAnswers;

    let correctAnswers = 0;

    for (let i = 0; i < userAnswers.length; i++) {
      const isCorrect = await isAnswerCorrect(userAnswers[i]);
      if (isCorrect) {
        correctAnswers++;
      }
    }

    let result = (correctAnswers/userAnswers.length)*100;
    result = Math.round(result);

    console.log('Correct answers:', correctAnswers);

    const testResult = await TestResults.create({
      user_id: userId,
      tests_ID: userAnswers[0].testId, 
      score: result,
    });

    req.userAnswers = [];

    next();
  } catch (error) {
    console.error('Error in calculateTestResult middleware:', error);
    res.status(500).send('Error saving test results');
  }
};


const isAllSelectedCorrect = (userAnswer, correctOptions) => {
  const userSelectedOptionIDs = userAnswer.selectedOptions.map(option => option.option_ID.option_ID || option.option_ID);

  const correctOptionIDs = correctOptions.map(option => option.option_ID);

  const result = userSelectedOptionIDs.length === correctOptionIDs.length &&
    userSelectedOptionIDs.every(selectedOptionID => correctOptionIDs.includes(selectedOptionID));

  console.log('All Selected Are Correct:', result);
  console.log('User Selected Options:', userSelectedOptionIDs);
  console.log('Correct Options:', correctOptionIDs);

  return result;
};


const areAllOptionsCorrect = (userSelected, correct) => {
  const result = userSelected.length === correct.length &&
    userSelected.every(selectedOptionID => correct.includes(selectedOptionID));

  console.log('Function :', result);
  console.log('User Selected Options:', userSelected);
  console.log('Correct Options:', correct);

  return result;
};



const isAnswerCorrect = async (userAnswer) => {
  try {
    const question = await Questions.findOne({
      where: { question_ID: userAnswer.questionId },
      include: [{ model: Options, as: 'Options' }]
    });

    if (!question || !question.Options || !Array.isArray(question.Options)) {
      console.error('Invalid question or options:', userAnswer.questionId);
      return false;
    }

    const correctOptions = question.Options.filter(option => option && option.isCorrect);

    if (!Array.isArray(userAnswer.selectedOptions)) {
      console.error('Invalid selected options format:', userAnswer.selectedOptions);
      return false;
    }

    const allSelectedAreCorrect = isAllSelectedCorrect(userAnswer, correctOptions);
    const allCorrectAreSelected = areAllOptionsCorrect(userAnswer.selectedOptions.map(option => option.option_ID.option_ID || option.option_ID), correctOptions.map(option => option.option_ID));


    return allSelectedAreCorrect && allCorrectAreSelected;
  } catch (error) {
    console.error('Error in isAnswerCorrect:', error);
    return false;
  }
};

module.exports = {
  saveUserAnswers,
  calculateTestResult
};

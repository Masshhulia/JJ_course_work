const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const path = require('path');
const generateRoadmapPDF = require('./pdfGenerator');
const roadmapData = require('./roadmap_data.json');
const { User } = require('../../../models/models'); // Sequelize модель

const bot = new TelegramBot('7840918065:AAHha1FUJgvSp1HMyyqDgK5RrNsgYgq4TZQ', { polling: true });
const userState = {};

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  userState[chatId] = {};
  bot.sendMessage(chatId, 'Привет! Давайте подберем для вас индивидуальную дорожную карту.\nВыберите направление:', {
    reply_markup: {
      keyboard: [['Backend'], ['Frontend']],
      one_time_keyboard: true,
    },
  });
});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const state = userState[chatId] || {};

  if (msg.text.startsWith('/')) return;

  // Шаг 1: Направление
  if (!state.goal) {
    const goal = msg.text.toLowerCase();
    if (!['backend', 'frontend'].includes(goal)) {
      return bot.sendMessage(chatId, 'Пожалуйста, выберите "Backend" или "Frontend".');
    }
    state.goal = goal;
    bot.sendMessage(chatId, 'Какой у вас уровень?', {
      reply_markup: {
        keyboard: [['Beginner'], ['Intermediate'], ['Advanced']],
        one_time_keyboard: true,
      },
    });
  }

  // Шаг 2: Уровень
  else if (!state.level) {
    const level = msg.text.toLowerCase();
    if (!['beginner', 'intermediate', 'advanced'].includes(level)) {
      return bot.sendMessage(chatId, 'Выберите один из уровней: Beginner, Intermediate, Advanced.');
    }
    state.level = level;
    bot.sendMessage(chatId, 'Сколько часов в неделю вы готовы уделять обучению?');
  }

  // Шаг 3: Часы в неделю
  else if (!state.hoursPerWeek) {
    const hours = parseInt(msg.text);
    if (isNaN(hours) || hours <= 0) {
      return bot.sendMessage(chatId, 'Введите корректное число часов (например, 10).');
    }
    state.hoursPerWeek = hours;
    bot.sendMessage(chatId, 'Сколько недель вы планируете учиться?');
  }

  // Шаг 4: Продолжительность
  else if (!state.durationWeeks) {
    const weeks = parseInt(msg.text);
    if (isNaN(weeks) || weeks <= 0) {
      return bot.sendMessage(chatId, 'Введите корректное число недель (например, 12).');
    }
    state.durationWeeks = weeks;
    bot.sendMessage(chatId, 'Введите ваш email для получения PDF:');
  }

  // Шаг 5: Email и генерация PDF
  else if (!state.email) {
    const email = msg.text.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return bot.sendMessage(chatId, 'Пожалуйста, введите корректный email.');
    }

    state.email = email;
    bot.sendMessage(chatId, 'Генерирую вашу PDF-дорожную карту...');

    const modules = roadmapData[state.goal][state.level];
    const totalHours = state.hoursPerWeek * state.durationWeeks;

    let pickedModules = [];
    let sum = 0;

    for (const m of modules) {
      if (sum + m.hours <= totalHours) {
        pickedModules.push(m);
        sum += m.hours;
      } else break;
    }

    try {
      const filename = `roadmap_${chatId}.pdf`;
      const pdfDir = path.join(__dirname, '../../../', 'static', 'roadmaps');
      if (!fs.existsSync(pdfDir)) fs.mkdirSync(pdfDir, { recursive: true });

      const filePath = path.join(pdfDir, filename);
      

      await generateRoadmapPDF({
        goal: state.goal,
        level: state.level,
        hoursPerWeek: state.hoursPerWeek,
        durationWeeks: state.durationWeeks,
      }, pickedModules, filePath);

      // Сохранение относительного пути
      state.generatedFilePath = path.join('roadmaps', filename);

      bot.sendDocument(chatId, filePath).then(() => {
        bot.sendMessage(chatId, 'Хотите сохранить PDF-дорожную карту в личный кабинет?', {
          reply_markup: {
            inline_keyboard: [
              [{ text: 'Да', callback_data: `save_yes_${chatId}` }],
              [{ text: 'Нет', callback_data: `save_no_${chatId}` }],
            ],
          },
        });
      });
    } catch (err) {
      console.error(err);
      bot.sendMessage(chatId, 'Произошла ошибка при создании PDF.');
      delete userState[chatId];
    }
  }

  userState[chatId] = state;
});

// Обработка нажатий на кнопки
bot.on('callback_query', async (callbackQuery) => {
  const msg = callbackQuery.message;
  const chatId = callbackQuery.from.id;
  const data = callbackQuery.data;

  if (!userState[chatId]) return;

  if (data.startsWith('save_yes_')) {
    try {
      const state = userState[chatId];
      const [user, created] = await User.findOrCreate({
        where: { email: state.email },
        defaults: { documents: state.generatedFilePath },
      });

      if (!created) {
        await User.update({ documents: state.generatedFilePath }, { where: { email: state.email } });
      }

      bot.sendMessage(chatId, 'PDF-документ сохранен в вашем личном кабинете.');
    } catch (err) {
      console.error(err);
      bot.sendMessage(chatId, 'Ошибка при сохранении PDF в личный кабинет.');
    }
  } else if (data.startsWith('save_no_')) {
    bot.sendMessage(chatId, 'Хорошо! PDF-дорожная карта уже у вас. Удачи в обучении!');
  }

  delete userState[chatId];
});
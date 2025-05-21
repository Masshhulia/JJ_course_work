const PDFDocument = require('pdfkit');
const fs = require('fs');

function generateRoadmapPDF(userData, roadmapModules, filename = 'roadmap.pdf') {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50 });
    const writeStream = fs.createWriteStream(filename);
    doc.pipe(writeStream);

    // Указываем путь к шрифту
    doc.font('./font.ttf'); // Замените на правильный путь

     // Добавление логотипа, смещаем вправо
    doc.image('./logo.jpg', 480, 30, { width: 100 })
        .moveDown(2); // Укажите правильный путь к логотипу

    // Заголовок, смещаем вниз
    doc
      .fontSize(24)
      .fillColor('black') // Основной цвет
      .text('Индивидуальная дорожная карта', { align: 'center', underline: false })
      .moveDown(2);

    // Информация о пользователе
    doc
      .fontSize(12)
      .fillColor('#000')
      .text(`Направление: ${userData.goal}`)
      .text(`Уровень: ${userData.level}`)
      .text(`Время в неделю: ${userData.hoursPerWeek} ч`)
      .text(`Общая продолжительность: ${userData.durationWeeks} нед`)
      .moveDown();

    doc
      .fontSize(16)
      .fillColor('#6A0DAD') // Цвет заголовка модулей
      .text('Рекомендуемые модули:')
      .moveDown();

    // Дорожная карта
    roadmapModules.forEach((item, index) => {
      const startY = doc.y; // Сохраняем текущее положение Y

      // Прямоугольник для каждого модуля
      doc
        .rect(50, startY, 500, 80) // Положение и размер прямоугольника
        .fill('#e1e1f2') // Цвет фона
        .stroke('#cccccc'); // Цвет границы

      doc
        .fontSize(14)
        .fillColor('#1E0025') // Цвет текста
        .text(`${index + 1}. ${item.name}`, 60, startY + 10)
        .text(`Описание: ${item.description}`, 60, startY + 30)
        .text(`Время: ${item.hours} ч`, 60, startY + 50);

      // Проверка, нужно ли переходить на новую страницу
      if (index < roadmapModules.length - 1) {
        const nextModuleY = doc.y + 80; // Положение Y для следующего модуля
        if (nextModuleY > doc.page.height - doc.options.margin * 2) {
          doc.addPage(); // Переход на новую страницу
        } else {
          doc.moveDown(1); // Отступ между модулями
        }
      }
    });

    // Футер
    doc
      .moveDown()
      .fontSize(10)
      .fillColor('gray')
      .text('Сгенерировано ботом на JJ', { align: 'center' });

    doc.end();

    writeStream.on('finish', () => {
      resolve(filename);
    });

    writeStream.on('error', reject);
  });
}

module.exports = generateRoadmapPDF;
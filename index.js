require('dotenv').config()
const express = require('express');
const sequelize = require('./db.js')
const models = require('./models/models.js')
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index.js');
const errorHandler = require('./middleware/ErrorHandlingMiddleware.js');
const authMiddleware = require('./middleware/authMiddleware.js')
const { saveUserAnswers, calculateTestResult } = require('./middleware/testSessionMiddleware'); // Подключаем middleware
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}))


app.use('/api/test', saveUserAnswers, calculateTestResult);
app.post('/api/questions/testresults', authMiddleware,saveUserAnswers, calculateTestResult, (req, res) => {
    
    res.status(200).json({ message: 'Test results saved successfully' });
   });
   

// Подключаем ваши роуты
app.use('/api', router);

// Обработка ошибок, должна быть в конце
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch (e) {
        console.log(e)
    }
}

start();

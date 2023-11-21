require('dotenv').config()
const express = require('express');
const sequelize = require('./db.js')
const models = require('./models/models.js')
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index.js')
const errorHandler = require('./middleware/ErrorHandlingMiddleware.js')
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}))
app.use('/api', router)



//обработка ошибок, должен быть в конце!!!
app.use(errorHandler);
// app.get('/',(req,res)=>{
//     res.status(200).json({message: 'Усё добра'})
// })



const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        // app.get('/', (req, res) =>{res.send('Hello Juniors Journey!!!')})
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    }catch(e){
        console.log(e)
    }
}

// app.get('/', (req, res) =>{res.send('Hello Juniors Journey!!!')})

start();

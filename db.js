





const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)


























// const Pool = require('pg').Pool;

// const pool = new Pool({
//     user: "postgres",
//     password: '7777777',
//     host: "localhost",
//     port: 5432,
//     database: "JJDB"
// });

// module.exports = pool;

// import { Sequelize } from "sequelize";
//  export const connection = async() =>{
//     const sequelize = new Sequelize('jjdb', 'postgres', '7777777', {
//         host: 'localhost',
//         dialect:'postgres'
//     });


//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// };

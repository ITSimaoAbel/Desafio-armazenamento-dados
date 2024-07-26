const mongoose = require("mongoose");

DB_URL = process.env.DB_URL;

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.DATABASE_URL);
        
        console.log(`Base de dados MongoDB conectad com sucesso: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;
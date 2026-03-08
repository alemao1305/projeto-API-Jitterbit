const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://admin:admin123@localhost:27017', {
            
        });
        console.log('MongoDB conectado!');
    } catch (error) {
        console.error('Erro ao conectar no MongoDB', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
const mongoose = require('mongoose');

mongoose.PromiseProvider = global.Promise;
const connection = mongoose.createConnection('mongodb://localhost:27017/express', {}, (error) => {
    if (error) {
        console.error('The server has shutdown due to the following Mongo error:', error);
        process.exit(0);
    }
});

connection.on('disconnect', () => {
    console.error('The Mongo connection has been interrupted.');
});

process.on('SIGINT', () => {  
    mongoose.connection.close(() => { 
      console.error('Mongoose connection disconnected through app termination'); 
      process.exit(0); 
    }); 
  }); 

module.exports = { mongoose, connection };
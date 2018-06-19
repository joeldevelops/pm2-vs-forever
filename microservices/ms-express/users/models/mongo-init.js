const mongoose = require('mongoose');

mongoose.PromiseProvider = global.Promise;
const connection = mongoose.createConnection('http://localhost:27017/ms-express');

connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = { mongoose, connection };
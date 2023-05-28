require('dotenv').config();
const mongoose = require('mongoose');

const USER = process.env.MONGO_USER;
const PASSWORD = process.env.MONGO_PASSWORD;
const HOST = process.env.MONGO_HOST;
const DATABASE = process.env.MONGO_DATABASE;

mongoose.Promise = global.Promise;


mongoose.connect(`mongodb://${USER}:${PASSWORD}@${HOST}/${DATABASE}?authSource=admin`)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(() => {
    console.log('Could not connect to MongoDB');
  });

module.exports = {};
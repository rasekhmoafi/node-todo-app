let mongoose = require('mongoose');

mongoose.Promise = global.Promise; //set up to use promise in mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
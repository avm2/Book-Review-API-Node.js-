const mongoose = require('mongoose');
require('dotenv').config();

module.exports = () => {
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    mongoose.connection.on('open', () => {
        //console.log('Connected successfully');
    });
    mongoose.connection.on('error', (err) => {
        console.log(`Connected unsuccessfull ${err}`);
    });

    mongoose.Promise = global.Promise;
}
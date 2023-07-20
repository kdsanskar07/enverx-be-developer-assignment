const mongoose = require('mongoose');
const config = require('./config')

mongoose.connect(config.development.mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;

db.once('open', function () {
    console.log('Server is connected to mongoDB database');
}).on('error', function (error) {
    console.log("Error connecting to the database : ", error);
});
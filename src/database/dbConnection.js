const mongoose = require('mongoose');

const dbHost = 'mongodb://localhost:27017/Lizard';

mongoose.connect(dbHost);

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){

    console.log("Connected to DB");


});



var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var signInSchema= new Schema({

    userFullName: {type :String},
    userName: {type :String},
    userPassword: {type :String},
    userAge: {type :String},
    userBachelorDegree: {type :String},
    userMasterDegree: {type :String},
    userDesignation: {type :String},
    userCurrentproject: {type :String}

});

module.exports = signInSchema
var express = require('express');
var app = express();
var db = require("./dbConnection")

var bodyParser = require('body-parser');


app.use(bodyParser.json()); // for parsing application/json


app.get('/getUser', function (req, res) {
       console.log(req.query)
    db.get().collection('Users').find(req.query).toArray((findErr, result)=>{
        if (findErr) throw findErr;
        
        res.send(result)
        
    });
});

app.post('/addUser', function (req, res) {
    
   console.log(req.body) 

    db.get().collection('Users').insert(req.body, (findErr, result)=>{
        if (findErr) throw findErr;
        
        res.send(result)
        
    });
    
    
});


db.connect(() => {
    app.listen(5000, function (){
        console.log(`Listening`);
    });
});
const express = require('express');
const app = express();
require("./../database/dbConnection")

const signInModel = require("./../database/model/signInModel")

const bodyParser = require('body-parser');


app.use(bodyParser.json()); // for parsing application/json


app.get('/getUser', function (req, res) {
       console.log(req.query)
       signInModel.signInFormModel.find(req.query, (err,response)=>{
            if(err) res.send(err);
            res.send(response)
       })
});

app.post('/addUser', function (req, res) {
    
   console.log(req.body) 

   signInModel.signInFormModelObj(req.body).save(err =>{
    
      if(err) res.send(err);
    
      res.send("User created successfully!");
   })
   
});



app.listen(5000, function (){
    console.log(`Listening`);
});

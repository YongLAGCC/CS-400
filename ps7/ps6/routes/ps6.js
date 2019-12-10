const express = require('express');
const router = express.Router();
const request = require('request');
const w = require('./config');
const mongoose =require('mongoose');

mongoose.connect("mongodb://localhost:27017/test2");
const db = mongoose.connection; 


const url = w.url;
const id = w.id;
const key = w.key;
const method = w.method;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
    console.log("Connection succeeded.");
 });

const Schema = mongoose.Schema; 

const weatherSchema = new mongoose.Schema({
    mongoTem: String, 
    mongoCon: String, 
    mongoLat: String, 
    mongoLon: String
});


const Users = mongoose.model("Users", weatherSchema);

// const Boston = new Weather({
//     mongoTem: " 324", 
//     mongoCon: "good",
//     mongoLat: "01223",
//     mongoLon: "-3234"
// })

// Boston.save( (error) => {
//     console.log("you are saved");
//     if(error){
//         console.log(error);
//     }
// })

router.post('/results', function(req, res) {
    const BostonWeather = new Users(req.body);
    
    BostonWeather.save()
        .then( function(item) {
            res.send("temp -> "+ BostonWeather.mongoTem +   "log ->  " + BostonWeather.mongoLon
            +" lat ->  "+BostonWeather.mongoLat + "condition-> "+ BostonWeather.mongoCon);
        })
        .catch( function(err){
            res.status(400).send("cannot save it");
        })
})

router.get('/ng', function(req, res) {
    res.sendFile('app.component.html', {'root': '../angularApp/src/app'});
})

// router.get('/ngEmployee', function(req, res) {
//     res.sendFile('employee.component.html', {'root': '../angularApp/src/app/employee'});
// })

router.get('/w', (req, res, next) => {
    res.send('222222');
  })
  
      .get('/a', (req, res, next) => {
      res.render('index', { title: 'poster' });
    });


router.get('/', (req, res, next) =>{
    console.log(res);
    const options = {
        url: url,
        qs: {
            app_id: id,
            app_key: key,
        },
        method: method
    };

    request(options, function (error, response, body) {
        if (error)
            throw new Error(error);
        const jsonBody = JSON.parse(body);
        res.render('ps6', jsonBody);
    });
});



module.exports = router;



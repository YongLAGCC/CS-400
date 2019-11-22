const express = require('express');
const router = express.Router();
const request = require('request');
const weather = require('./config');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ps6");

router.get('/', function (req, res, next) {
    const options = {
        url: weather.url,
        qs: {
            app_id: weather.id,
            app_key: weather.key,
        },
        method: weather.method
    };

    request(options, function(error, response, body) {
        if (error) throw new Error(error);
        res.render('ps6', JSON.parse(body));
    });
});

var nameSchema = new mongoose.Schema({
    mongoLat: String,
    mongoLon: String,
    mongoTemp: String,
    mongoCond: String
});
var User = mongoose.model("User", nameSchema);

router.post("/result", (req, res) => {
    var myData = new User(req.body);

    myData.save()
        .then(item => {
            res.send( "Lat: " + myData.mongoLat + " Longitude: " + myData.mongoLon + " Temperature: " + myData.mongoTemp + " Condition: " + myData.mongoCond  );
        })
        .catch(err => {
            res.status(400).send("e");
        });
});

module.exports = router;

/*
1. user enters key (date)
2. on the route: query db for key
3. if key exists, return else insert and return

 */




const express = require('express');
const router = express.Router();
const db = require('../mongo/mongo');
/* GET home page. */

db.connect((err, client) => {
    if (err) {
        console.log(`ERR: ${err}`);
    } else {
        console.log(`Connected`);
    }
});

router.post('/', function (req, res, next) {

    // let name = req.body.name;
    //
    // let nameObj = {
    //     name: name
    // };

    let mongo = db.getDB();
    // mongo.collection('names').insertOne(nameObj, function (err, r) {
    //     res.send('success');
    // });
    mongo.collection('names').insertOne(req.body, function (err, r) {
        res.send('success');
    });
});

router.get('/bare', function (req, res, next)  {

    let mongo = db.getDB();
    mongo.collection('peoples').find().
    toArray(function(err, docs) {
        console.log(docs)
        res.send(docs);
    })
});

router.get('/foobar', function (req,res,next) {
    res.send({message: 'got here'});
})



router.get('/:name', function (req, res, next)  {

    let mongo = db.getDB();
    mongo.collection('names').find({name: req.params.name}).
        toArray(function(err, docs) {
            console.log(docs)
            res.send(docs);
        })
    });



module.exports = router;

const express = require('express');
const router = express.Router();
const request = require('request');
const w = require('./config');


const url = w.url;
const id = w.id;
const key = w.key;
const method = w.method;



router.get('/w', (req, res, next) => {
    res.send('222222');
  })
  
      .get('/a', (req, res, next) => {
      res.render('index', { title: 'poster' });
    });
  

router.get('/', function (req, res, next) {
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
        res.render('ps4', jsonBody);
    });
});

module.exports = router;

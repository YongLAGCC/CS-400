var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();


var jsonParser = bodyParser.json(); 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'I like C@400!!!' });
});

router.get('/ps3', function (req, res, next) {
  res.render(
    'ps3', {
      professorName: "Donham", 
      className: "CS400", 
      bu: "Boston bu" 
    } 
    );
});

router.post('/ps3', (req, res, next) => {
  let { yong } = req.body; 
  let lengthStr = yong.length
  res.render(
    'ps3', { yong, lengthStr   
    } )
})


module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'I like C@400!!!' });
});

router.get('/ps3', function (req, res, next) {
  res.render(
    'csps3', {
      professorName: "Donham", 
      className: "CS400", 
      bu: "Boston bu" 
    } 
    );
})
.post (function (req, res, next) { 
  //vars on request body
  res.send(`Bar has the value ${req.body.bar}`);
})

.put (function (req, res, next) { 
  //vars on body
  res.send(`Bar has the value ${req.body.bar}`);
})
  // .get(function(req, res, next) {
  //   res.render('csps3', {bu: "Donham"});
  // });

router.route('/:name')
    .get(function(bob, fred, sally) {
      fred.send(`Bar has the value ${bob.params.name}` );
    })

router.get('/:first', function(req, res, next) {
  res.send(`Bar has the value ${req.params.first}`);
})
router.route('/:first/:last')
  .get(function(bob, fred, sally) {
    fred.send(`Bar has the value ${bob.params.first} ${bob.params.last}` );
})
  



module.exports = router;


var express = require('express');
var router = express.Router();
var path = require('path');

// Data
var cats = ['Kris', 'Luna', 'Rubio'];

router.get('/', function (req, res) {
  res.send(cats);
});

router.post('/', function (req, res) {

  // check for duplicate name
  var found = false;
  for (var i = 0; i < cats.length; i++) {
    if (cats[i] === req.body.catName) {
      found = true;
      break;
    }
  }

  // If no duplicate found, add to array
  if (!found) { cats.push(req.body.catName); }

  res.send(true);
});

module.exports = router;

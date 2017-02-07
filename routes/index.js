var express = require('express');
var router = express.Router();
var axios = require('axios');
var request = require('request');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Politication API' });
});



module.exports = router;

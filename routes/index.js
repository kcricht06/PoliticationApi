var express = require('express');
var router = express.Router();
var axios = require('axios');
var request = require('request');

var headers = {
    'Content-Type': 'application/json'
};

var dataString = '{"bio_ids": ["C000880", "A000360"]}';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Politication API' });
});

router.post('/', function(req, res) {
  var options = {
    url: 'https://congressforms.eff.org/retrieve-form-elements/',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);

});

module.exports = router;

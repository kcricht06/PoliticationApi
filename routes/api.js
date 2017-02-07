var express = require('express');
var router = express.Router();
var request = require('request');
var headers = {
    'Content-Type': 'application/json'
};


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('s');
// });
router.post('/api', function(req, res) {
  console.log('req.body: ',req.body)
  var dataString = JSON.stringify({"bio_ids": eval(req.body.bio_ids) });

  var options = {
    url: 'https://congressforms.eff.org/retrieve-form-elements/',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
        res.json(body);
        // res.render(response);
        // res.render('api', {api: 'Politication Api'})
    }
}

request(options, callback);

});



module.exports = router;

var express = require('express');
var morgan = require('morgan')
var app = express();

app.use(morgan());

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.render('index', { title: "kadoppe's sandbox" });
});

app.get('/script-src-hash', function(req, res) {
  res.render('script-src-hash', { title: "script src hash problem "});
});

var server = app.listen(3000);

var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.render('index', { title: "kadoppe's sandbox" });
});

var server = app.listen(3000);

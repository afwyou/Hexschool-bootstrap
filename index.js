var express = require('express');
var app = express();
var engine = require('ejs-locals');
app.engine('ejs', engine);
app.set('views', './views');
app.set('view engine', 'ejs');
//增加靜態檔案的路徑
app.use(express.static('public'))

//路由
app.get('/', function (req, res) {
  res.render('index');
})
app.get('/questionnaire', function (req, res) {
  res.render('questionnaire');
})
app.get('/service', function (req, res) {
  res.render('service');
})
app.get('/recent', function (req, res) {
  res.render('recent');
})
app.get('/adopt', function (req, res) {
  res.render('adopt');
})
app.get('/snow', function (req, res) {
  res.render('snow');
})

// 監聽 port
var port = process.env.PORT || 3000;
app.listen(port);
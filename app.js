const express = require('express');
const hbs = require('hbs');
// const bodyParser = require('body-parser'); // use express bulid-in body-parser module
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
const port = process.env.PORT || 8081;


// add hbs engine
app.set('views',  path.join(__dirname, 'views')); // TODO: set views directory
app.set('view engine', 'hbs'); // TODO: set view engine as hbs
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));


// add body-parser
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// set static files router
app.use(express.static('public'));
app.use(express.static('node_modules'));


// load router
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

// app router
app.use('/', indexRouter);
app.use('/user', userRouter);


// 404 not found
app.use(function(req, res, next) {
  res.status(404).send('抱歉!您的頁面找不到!');
});

// 500
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('程式有些問題，請稍後嘗試');
});

// listening on port
app.listen(port, function() {
  console.log(`app is listening on ${port}.`);
});
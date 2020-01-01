var express = require('express');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var weekdayRouter = require('./routes/weekday');
var zellerRouter = require('./routes/zeller');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/weekday', weekdayRouter);
app.use('/zeller', zellerRouter);

module.exports = app;

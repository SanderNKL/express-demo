// var env = require('dotenv');
import dotenv from 'dotenv';
dotenv.config();

// var createError = require('http-errors');
import createError from 'http-errors';
// var express = require('express');
import express from 'express';
// var cookieParser = require('cookie-parser');
import cookieParser from 'cookie-parser';
// var logger = require('morgan');
import logger from 'morgan';
// var db = require('./sequelize');
// import db from './sequelize.js';

// db.sync({ alter: false });

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import hashRouter from './routes/hashRouter.js';

var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hash', hashRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).json({ message: err.message });
  // res.render('error');
});

// module.exports = app;
export default app;
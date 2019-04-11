var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var passport = require('passport');

require('./models/user');
require('./config/passport');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/successfullysell', { useNewUrlParser: true, promiseLibrary: require('bluebird') })
    .then(() =>  console.log('connection to mongodb successful :-) ak'))
    .catch((err) => console.error(err));

// var apiRouter = require('./routes/book');
var companyRouter = require('./routes/company');
var routesApi = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/successfullysell-com')));
app.use('/', express.static(path.join(__dirname, 'dist/successfullysell-com')));

// [SH] Initialise Passport before using the route middleware
app.use(passport.initialize());

//app.use('/api', apiRouter);
app.use('/company', companyRouter);

// [SH] Use the API routes when path starts with /api
app.use('/api', routesApi);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler

// Catch unauthorised errors
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({"message" : err.name + ": " + err.message});
    }
});

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.sendStatus(err.status);
});

module.exports = app;

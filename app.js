var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/successfullysell', { useNewUrlParser: true, promiseLibrary: require('bluebird') })
    .then(() =>  console.log('connection to mongodb successful :-) ak'))
    .catch((err) => console.error(err));

var apiRouter = require('./routes/book');
var companyRouter = require('./routes/company');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/successfullysell-com')));
app.use('/', express.static(path.join(__dirname, 'dist/successfullysell-com')));
app.use('/api', apiRouter);
app.use('/company', companyRouter);

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
    res.status(err.status || 500);
    res.sendStatus(err.status);
});

module.exports = app;

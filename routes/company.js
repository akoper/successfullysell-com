var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var Book = require('../models/Book.js');
var Company = require('../models/Company.js');

/* GET ALL COMPANIES */
router.get('/', function(req, res, next) {
    console.log('Express Node GET companies route hit');
    Company.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE COMPANY BY ID */
router.get('/:id', function(req, res, next) {
    console.log('Express Node GET company route hit');
    Company.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE COMPANY */
router.post('/', function(req, res, next) {
    console.log('Express Node route POST company hit');
    console.log(req.body);
    Company.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE COMPANY */
router.put('/:id', function(req, res, next) {
    Company.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE COMPANY */
router.delete('/:id', function(req, res, next) {
    Company.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;

'use strict';

const { Router } = require('express');

const Controller = require('../controllers/controllers');

const router = Router();

router.get('/', (req, res, next) => {
    res.json({ message: 'hello world' });
});

router.get('/random', (req, res, next) => {
    Controller.generateRandomNumber()
        .then((randomNumber) => {
            res.json(randomNumber);
        })
        .catch(next);
});

module.exports = router;
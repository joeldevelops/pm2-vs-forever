'use strict';

const { Router } = require('express');

const AuthController = require('../controllers/auth.controller');

const router = Router();

router.put('/', (req, res, next) => {
    AuthController.validateTicket()
        .then((result) => {
            res.json(result);
        })
        .catch(next);
});

module.exports = router;
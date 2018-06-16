'use strict';

const { Router } = require('express');
const router = Router();

const UsersController = require('../controllers/UsersController');

/** Create a user */
router.post('/users', (req, res, next) => {
    UsersController.createNewUser(req.body)
        .then(response => {
            // do something
        })
        .catch(next);
});

/** Read all users */
router.get('/users', (req, res, next) => {
    UsersController.getAllUsers()
        .then(response => {
            // do something
        })
        .catch(next);
});

/** Read a specific user */
router.get('/users/:id', (req, res, next) => {
    UsersController.getUserById(req.params.id)
        .then(response => {
            // do something
        })
        .catch(next);
});

/** Update a specific user */
router.put('/users/:id', (req, res, next) => {
    UsersController.updateUserById(res.body)
        .then(response => {
            // do something
        })
        .catch(next);
})

/** Delete a specific user */
router.delete('/users/:id', (req, res, next) => {
    UsersController.deleteUserById(res.body)
        .then(response => {
            // do something
        })
        .catch(next);
});

module.exports = router;
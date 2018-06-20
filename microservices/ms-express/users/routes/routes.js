'use strict';

const { Router } = require('express');
const router = Router();

const UsersController = require('../controllers/user.controller');

/** Read all users */
router.get('/', (req, res, next) => {
    try {
        UsersController.getAllUsers()
            .then(response => {
                res.send(response);
            })
            .catch(next);
    }
    catch (error) {
        next(error);
    }
});

/** Read a specific user */
router.get('/:id', (req, res, next) => {
    try {
        UsersController.getUserById(req.params.id)
        .then(response => {
            res.send(response);
        })
        .catch(next);
    }
    catch (error) {
        next(error);
    }
});

/** Create a user */
router.post('/', (req, res, next) => {
    // const user = {
    //     name: {
    //         first: 'First' + (Math.random()*1000),
    //         last: 'User' + (Math.random()*1000)
    //     },
    //     age: 24,
    //     ticketIds: []
    // }

    try {
        UsersController.createNewUser(user)
            .then(response => {
                res.send(response);
            })
            .catch(next);
    }
    catch (error) {
        next(error);
    }
});

/** Update a specific user */
router.put('/:id', (req, res, next) => {
    try {
        UsersController.updateUserById(req.params.id)
            .then(response => {
                res.send(response);
            })
            .catch(next);
    }
    catch (error) {
        next(error);
    }
})

/** Delete a specific user */
router.delete('/:id', (req, res, next) => {
    try {
        UsersController.deleteUserById(req.params.id)
        .then(response => {
            res.send(response);
        })
        .catch(next);
    }
    catch (error) {
        next(error);
    }
});

module.exports = router;
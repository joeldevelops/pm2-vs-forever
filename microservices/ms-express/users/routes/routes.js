'use strict';

const { Router } = require('express');
const router = Router();

const UsersController = require('../controllers/user.controller');

/** Read all users */
router.get('/', (req, res, next) => {
    UsersController.getAllUsers()
        .then(response => {
            res.send(response);
        })
        .catch(next);
});

/** Read a specific user */
router.get('/:id', (req, res, next) => {
    UsersController.getUserById(req.params.id)
        .then(response => {
            res.send(response);
        })
        .catch(next);
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

    UsersController.createNewUser(req.body)
        .then(response => {
            res.send(response);
        })
        .catch(next);
});

/** Update a specific user */
router.put('/:id', (req, res, next) => {
    UsersController.updateUserById(req.params.id)
        .then(response => {
            res.send(response);
        })
        .catch(next);
})

/** Delete a specific user */
router.delete('/:id', (req, res, next) => {
    UsersController.deleteUserById(req.params.id)
        .then(response => {
            res.send(response);
        })
        .catch(next);
});

module.exports = router;
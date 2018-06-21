'use strict';

const { Router } = require('express');

const TicketController = require('../controllers/ticket.controller');

const router = Router();

router.get('/', (req, res, next) => {
    res.json({ message: 'hello world' });
});

/**
 * Takes an object in the form of: data = { user: userObject, ticket: { type: type } }
 */
router.post('/buy', (req, res, next) => {
    
});

router.get('/buy', (req, res, next) => {

    const fakeData = {
        user: {
            _id: '7589402983745hroweu487584'
        },
        ticket: {
            type: '5-park'
        }
    }

    const response = TicketController.createNewTicket(fakeData);
});

module.exports = router;
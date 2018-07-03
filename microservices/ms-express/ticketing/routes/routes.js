'use strict';

const { Router } = require('express');

const TicketController = require('../controllers/ticket.controller');

const router = Router();

router.get('/', (req, res, next) => {
    res.json({ message: 'hello world' });
});

// Takes an object in the form of: data = { user: userObject, ticket: { type: type } }
router.post('/buy', (req, res, next) => {
    TicketController.purchaseTicket(req.body)
        .then((response) => {
            res.send(response);
        })
        .catch(next);
});

// Redeem a ticket.
router.put('/redeem', (req, res, next) => {
    TicketController.redeemTicket(req.body)
        .then((response) => {
            res.send(response);
        })
        .catch(next);
})

module.exports = router;
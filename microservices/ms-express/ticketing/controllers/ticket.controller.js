'use strict';

const createError = require('http-errors');
const request = require('request');
const uuid = require('uuid4');

const TicketModel = require('../models/ticket.model');

const TicketController = {
    createNewTicket: (data) => {
        const dataIsInvalid = data.user._id === undefined || data.ticket.type === undefined;
        if (dataIsInvalid) return createError(400, 'User details and ticket type are required.');

        const ticket = {
            purchaserId: data.user._id,
            type: data.ticket.type,
            authcode: uuid()
        }

        return TicketModel.createNewTicket(ticket);
    },

    getTicketById: (id) => {
        if (!id) return createError(400, 'Ticket id is required.');

        return TicketModel.getTicketById(id);
    },

    getTicketByUserId: (uid) => {
        if (!uid) return createError(400, 'User ID is required.');

        return TicketModel.getTicketByUserId(uid);
    },

    consumeTicket: (ticket) => {
        const invalidTicket = ticket.purchaserId === undefined || ticket.type == undefined;
        if (invalidTicket) return createError(400, 'Ticket purchaserId and type are required.');

        // Add code to check that the ticket is valid.
        // if (ticketNotAuthorized) return 'invalid';

        return new Promise((resolve, reject) => {
            request.put('http://localhost:3000/auth', ticket, (error, response, body) => {
                if (error) return reject(error);

                return resolve(response);
            });
        }).then((response) => {
            return TicketModel.deleteTicketById(ticket._id);
        })
        .catch((error) => {
            return error;
        })

    }
}

module.exports = TicketController;
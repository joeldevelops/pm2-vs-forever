'use strict';

const config = require('../../config');

const createError = require('http-errors');
const request = require('request');
const uuid = require('uuid4');

const TicketModel = require('../models/ticket.model');

const purchaseTicket = (data) => {
    const dataIsInvalid = data.user._id === undefined;
    if (dataIsInvalid) {
        return Promise.reject(createError(400, 'User details are required.'));
    }

    const ticket = {
        purchaserId: data.user._id,
        type: data.ticket.type || 'AdmissionTicket',
        authcode: uuid()
    }

    return TicketModel.createNewTicket(ticket)
    .then((response) => {
        return _addTicketsToUser(data.user, response);
    })
    .catch((error) => {
        return error;
    });
};

const getTicketById = (id) => {
    if (!id) return createError(400, 'Ticket id is required.');

    return TicketModel.getTicketById(id);
};

const getTicketByUserId = (uid) => {
    if (!uid) return createError(400, 'User ID is required.');

    return TicketModel.getTicketByUserId(uid);
};

const redeemTicket = (ticket) => {
    const invalidTicket = ticket.purchaserId === undefined || ticket.type == undefined;
    if (invalidTicket) {
        return Promise.reject(createError(400, 'Ticket purchaserId and type are required.'));
    }

    // Check that the ticket is valid.
    return _validateTicket(ticket)
    .then(() => {
        return TicketModel.deleteTicketById(ticket._id);
    })
    .catch((error) => {
        return error;
    });

};

const _addTicketsToUser = (user, ticket) => {
    if (!user.tickets) user.tickets = [];

    user.tickets.push(ticket);

    return new Promise((resolve, reject) => {
        request.put(`${config.users.url}/${data.user._id}`, 
            data.user,
            (error, response, body) => {
                if (error) return reject(error);

                return resolve(response);
            });
    });
}

const _validateTicket = (ticket) => {
    return new Promise((resolve, reject) => {
        request.put(`${config.auth.url}`, ticket, (error, response, body) => {
            if (error) return reject(error);

            return resolve(response);
        });
    });
}

module.exports = { 
    purchaseTicket, 
    getTicketById,
    getTicketByUserId,
    redeemTicket
};
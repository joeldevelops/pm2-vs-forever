'use strict';

const connection = require('./mongo-init').connection;

const TicketSchema = require('./schemas/ticket.schema');
const Ticket = connection.model('Ticket', TicketSchema);

const TicketModel = {
    getTicketById: (id) => {
        return Ticket.findById(id)
            .then((result) => {
                return result;
            })
    },

    getTicketByUserId: (uid) => {
        return Ticket.find({ "purchaserId": uid })
            .then((result) => {
                return result;
            })
    },

    createNewTicket: (ticket) => {
        return Ticket.create(ticket)
            .then((result) => {
                return result;
            })
    },

    updateTicketById: (id) => {
        return Ticket.findByIdAndUpdate(id)
            .then((result) => {
                return result;
            })
    },

    updateTicketByUserId: (uid) => {
        return Ticket.find({ "purchaserId": uid })
            .then((result) => {
                return result;
            })
    },

    deleteTicketById: (id) => {
        return Ticket.findByIdAndDelete(id)
            .then((result) => {
                return result;
            })
    }
}

module.exports = TicketModel;
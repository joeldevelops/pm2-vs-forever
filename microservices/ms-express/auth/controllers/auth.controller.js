'use strict';

const uuid = require('uuid4');
const createError = require('http-errors');

AuthController = {
    validateTicket: (ticket) => {
        return new Promise((resolve, reject) => {
            if (ticket === undefined || ticket.authcode === undefined) {
                return reject(_error());
            }
    
            if (uuid.valid(ticket.authcode)) {
                const valid = {
                    isValid: true,
                    message: "This ticket has been validated."
                }
                return resolve(valid);
            }
    
            return reject(_error());
        })
    }
}

const _error = () => {
    return createError(400, 'A ticket and valid authcode is required.');
}
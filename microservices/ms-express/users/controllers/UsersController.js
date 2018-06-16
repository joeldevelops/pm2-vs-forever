'use strict';

const createError = require('http-errors');

const UsersController = {
    createNewUser: (name) => {
        if (!name.first || !name.last) return createError(400, "The first and last name fields are required.");

        return new Promise((resolve, reject) => {

        });
    },
    getAllUsers: () => {
        return new Promise((resolve, reject) => {
            
        });
    },
    getUserById: (id) => {
        if(!id) return createError(400, "Invalid ID.");

        return new Promise((resolve, reject) => {
            
        });
    },
    updateUserById: (id) => {
        if(!id) return createError(400, "Invalid ID.");

        return new Promise((resolve, reject) => {
            
        });
    },
    deleteUserById: (id) => {
        if(!id) return createError(400, "Invalid ID.");

        return new Promise((resolve, reject) => {
            
        });
    }
}

const _myPrivateFunction = () => {} // for show

module.exports = UsersController;
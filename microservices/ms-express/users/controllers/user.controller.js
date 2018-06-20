'use strict';

const createError = require('http-errors');

const UserModel = require('../models/user.model');

const UsersController = {
    getAllUsers: () => {
        return UserModel.getAllUsers();
    },
    getUserById: (id) => {
        if(!id) return createError(400, "Invalid ID.");

        return UserModel.getUserById(id);
    },
    createNewUser: (name) => {
        const nameIsInvalid = name.first === undefined || name.last === undefined;
        if (nameIsInvalid) {
            return createError(400, "The first and last name fields are required.");
        }

        return UserModel.createNewUser(user);
    },
    updateUserById: (id) => {
        if(!id) return createError(400, "Invalid ID.");

        return UserModel.updateUserById(id);
    },
    deleteUserById: (id) => {
        if(!id) return createError(400, "Invalid ID.");

        return UserModel.deleteUserById(id);
    }
}

const _myPrivateFunction = () => {} // for show

module.exports = UsersController;
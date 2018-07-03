'use strict';

const createError = require('http-errors');

const UserModel = require('../models/user.model');

const getAllUsers = () => {
    return UserModel.getAllUsers();
}

const getUserById = (id) => {
    if(!id) {
        return Promise.reject(createError(400, "Invalid ID."));
    }

    return UserModel.getUserById(id);
}

const createNewUser = (user) => {
    const nameIsInvalid = !user.name.first || !user.name.last;
    if (nameIsInvalid) {
        return Promise.reject(createError(400, "The first and last name fields are required."));
    }

    return UserModel.createNewUser(user);
}

const updateUserById = (id) => {
    if(!id) {
        return Promise.reject(createError(400, "Invalid ID."));
    }

    return UserModel.updateUserById(id);
}

const deleteUserById = (id) => {
    if(!id) {
        return Promise.reject(createError(400, "Invalid ID."));
    }

    return UserModel.deleteUserById(id);
}

module.exports = {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUserById,
    deleteUserById
};
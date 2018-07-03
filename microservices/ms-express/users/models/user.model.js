const connection = require('./mongo-init').connection;

const UserSchema = require('./schemas/user.schema');
const User = connection.model('User', UserSchema);

const UserModel = {
    getAllUsers: () => {
        return User.find()
            .then((users) => {
                return users;
            });
    },

    getUserById: (id) => {
        return User.findById(id)
            .then((user) => {
                return user;
            });
    },

    createNewUser: (newUser) => {
        return User.create(newUser)
            .then((response) => {
                return response;
            });
    },

    updateUserById: (user) => {
        return User.findByIdAndUpdate(user)
            .then((user) => {
                return user;
            });
    },

    deleteUserById: (id) => {
        return User.findByIdAndDelete(id)
            .then((result) => {
                return result;
            })
    }
}

module.exports = UserModel;
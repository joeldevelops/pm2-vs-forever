const { mongoose, connection } = require('./mongo-init');

const UserSchema = mongoose.Schema({
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    age: Number,
    ticketIds: Array,
    createdAt: Date
});

UserSchema.pre('save', (next) => {
    if (!this.createdAt) this.createdAt = new Date();

    next();
});

const UserModel = connection.model('User', UserSchema);

class User {
    createUser = (user) => {
        UserModel.create(user)
        // .then();
    }
}

module.exports = User;
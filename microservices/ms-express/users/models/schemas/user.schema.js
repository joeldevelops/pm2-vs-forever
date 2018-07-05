const { mongoose, connection } = require('../mongo-init');

const UserSchema = new mongoose.Schema({
    createdAt: Date,
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
    tickets: Array
});

UserSchema.pre('save', () => {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }

    if (!this.tickets) {
        this.tickets = [];
    }
});

module.exports = UserSchema;
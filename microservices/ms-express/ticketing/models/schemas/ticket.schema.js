const { mongoose, connection } = require('../mongo-init');

const TicketSchema = new mongoose.Schema({
    createdAt: Date,
    authcode: {
        type: String,
        required: true
    },
    purchaserId: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

TicketSchema.pre('save', () => {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }
});

module.exports = TicketSchema;
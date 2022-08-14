const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    picture: {
        type: String
    },
    isGoogleAuthenticated: {
        type: Boolean,
        required: true
    },
    hasDefaultLogin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;
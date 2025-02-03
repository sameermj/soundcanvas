const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Song Schema
const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    lyrics: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    audioFile: {
        type: String,
        required: true
    }
});

// Models
const User = mongoose.model('User', userSchema);
const Song = mongoose.model('Song', songSchema);

module.exports = { User, Song };
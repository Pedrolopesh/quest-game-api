const mongoose = require('../database/index');

const PlayerSchema = new mongoose.Schema({

    nickname: {
        type: String,
        require: true,
        unique: true,
    },

    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true
    },

    totalScore: {
        type: Object,
        require: false,
    },   

    status: {
        type: String,
        require: false,
    },

    createdAt: {
        type: Date,
        default:Date.now,
    },

    updatedAt: {
        type: Date,
        default:Date.now,
    },

}, {
    timestamps: true,
    versionKey: false
})

const Player = mongoose.model('Player', PlayerSchema)

module.exports = Player
const mongoose = require('../database/index');

const PodiumSchema = new mongoose.Schema({

    position: {
        type: String,
        require: true,
    },

    player: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    }],

    points:{
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

const Podium = mongoose.model('Podium', PodiumSchema)

module.exports = Podium
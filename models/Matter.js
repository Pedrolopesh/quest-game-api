const mongoose = require('../database/index');

const MatterSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true,
    },
    
    questions: [{
        require: false,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quest'
    }],

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

const Matter = mongoose.model('Matter', MatterSchema)

module.exports = Matter
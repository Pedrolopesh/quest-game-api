const mongoose = require('../database/index');

const QuestSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true,
    },
    
    matter: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Matter'
    }],
    
    playerAnswer:{
        type: Array,
        require: false,
    },
    
    description: {
        type: String,
        require: false,
    },

    correctAlternative:{
        type: String,
        require: false,
    },
    
    alternatives: {
        type: Object,
        require: false,
        enum: [
            {option:String, text:String},
        ]
    },
    
    level:{
        type: Number,
        require: false,
    },

    points:{
        type: Number,
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

const Quest = mongoose.model('Quest', QuestSchema)

module.exports = Quest
// import mongoose to build the model 
const mongoose = require('mongoose');

// the model - the rules the entries need to follow
const HeroSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minlength: [2, "name must have at least 2 chars"]
    },
    power: {
        type: Number,
        required: [true, "must give a number"],
        min: [2, "power must be over 2"]
    }
}, {timestamps: true})

const Hero = mongoose.model('Hero', HeroSchema);

module.exports = Hero

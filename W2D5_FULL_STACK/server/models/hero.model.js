// import mongoose to build the model 
const mongoose = require('mongoose');

// the model - the rules the entries need to follow
const HeroSchema = new mongoose.Schema({
    name: {
        type: String
    },
    power: {
        type: Number
    }
}, {timestamps: true})

const Hero = mongoose.model('Hero', HeroSchema);

module.exports = Hero

const express =require("express");
const app = express();

const mongoose = require('mongoose')

const departureSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String
    },
    markdown:{
        type: String,
        required: true
    },
    DateDepart:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Departures', departureSchema)

const mongoose = require('mongoose');

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: string,
    airport: string,
    flightNo: Number,
    departs: Date,
})

module.exports = mongoose.model('Flight', flightSchema);
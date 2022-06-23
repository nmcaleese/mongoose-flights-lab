const mongoose = require("mongoose");

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"],
    required: true,
  },
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    required: true,
    default: "DEN",
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true,
  },
  departs: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Flight", flightSchema);

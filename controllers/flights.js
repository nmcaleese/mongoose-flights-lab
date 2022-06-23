// const { create } = require('../models/flight');
const Flight = require("../models/flight");

module.exports = {
  index,
  new: newFlight,
  create,
};

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render("flights/index", { title: "All Flights", flights });
  });
}

function newFlight(req, res) {
    let today = new Date()
    let defaultDate = today.toISOString().slice(0,16)
    res.render("flights/new", { title: "Add Flight" , defaultDate});
}

function create(req, res) {
  // reformatting
  req.body.flightNo = req.body.flightNo.replace(/\s/g, "");
  //create new  with Flights
  let flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.redirect("/flights/new");
    res.redirect("/flights");
  });
}

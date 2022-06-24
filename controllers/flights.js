// const { create } = require('../models/flight');
const Flight = require("../models/flight");
const Ticket = require("../models/ticket")

module.exports = {
  index,
  new: newFlight,
  create,
  show,
};

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render("flights/index", { title: "All Flights", flights });
  });
}

function newFlight(req, res) {
  let today = new Date();
  let defaultDate = today.toISOString().slice(0, 16);
  res.render("flights/new", { title: "Add Flight", defaultDate });
}

function create(req, res) {
  // reformatting
  req.body.flightNo = req.body.flightNo.replace(/\s/g, "");
  //create new  with Flights
  let flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.redirect("/flights/new");
    res.redirect("/flights");
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
      Ticket.find({flight:req.params.id}, function(err, tickets){
      res.render("flights/show", { title: "Flight Detail", flight, tickets});
      })
  });
}

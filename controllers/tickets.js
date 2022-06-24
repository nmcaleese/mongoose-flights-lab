const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

module.exports = {
  new: newTicket,
  create,
};

function create(req, res) {
  console.log(`START HERE`)
  console.log(req.body)
  Ticket.create(req.body, function (err, ticket) {
    console.log(ticket);
    console.log(err)
    res.redirect("/tickets/new");
  });
}

function newTicket(req, res) {
  Ticket.find({}, function (err, tickets) {
    Flight.find({}, function (err, flights) {
      // console.log(flights)
      res.render("tickets/new", {
        title: "Add Ticket",
        tickets,
        flights,
      });
    });
  });
}

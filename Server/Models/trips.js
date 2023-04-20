const mongoose = require("./index");

const Schema = mongoose.Schema;

const tripSchema = new Schema({
  country: String,
  entrydate: String,
  exitdate: String,
  days: Number,
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;

const mongoose = require("./index");

const Schema = mongoose.Schema;

const tripSchema = new Schema({
  country: String,
  entrydate: {
    type: Date,
    get: (value) => value.toISOString(), // Convert date to ISO 8601 format when getting from database
    set: (value) => new Date(value), // Convert ISO 8601 format to date when setting to database
  },
  exitdate: {
    type: Date,
    get: (value) => value.toISOString(), // Convert date to ISO 8601 format when getting from database
    set: (value) => new Date(value), // Convert ISO 8601 format to date when setting to database
  },
  days: Number,
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;

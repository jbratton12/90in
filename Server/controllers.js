const Trip = require("./Models/trips");

const getAllTrips = async (req, res) => {
  try {
    const data = await Trip.find(); //talking to the DB, finding all the rows
    res.send(data); //what we send back is the line above
    console.log("all the data should be here");
    res.status(201);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
};

const AddTrip = async (req, res) => {
  const trip = req.body;
  // console.log(trip);
  //the request body/ user input
  try {
    const tripCreated = await Trip.create({
      // create a new entry in the db
      country: trip.country,
      entrydate: trip.entryDate,
      exitdate: trip.exitDate,
      days: trip.days,
    });
    // console.log(tripCreated);
    res.status(201);
    res.send(tripCreated);
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send(e);
  }
};

const deleteTrip = async (req, res) => {
  try {
    // Delete a trip by id
    const deletedTrip = await Trip.findByIdAndDelete(req.params.id);
    if (!deletedTrip) {
      return res.status(404).send("Trip not found");
    }
    res.send("Trip deleted");
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = { AddTrip, getAllTrips, deleteTrip };

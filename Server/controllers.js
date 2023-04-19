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
  console.log(trip);
  //the request body/ user input
  try {
    await Trip.create({
      // create a new entry in the db
      country: trip.country,
      entrydate: trip.entrydate,
      exitdate: trip.exitdate,
      days: trip.days,
    });
    res.status(201);
    res.json(`${trip.country}`);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
};

module.exports = { AddTrip, getAllTrips };

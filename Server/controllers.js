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

//patch request to Database
const updateTrip = async (req, res) => {
  const tripId = req.params.id;
  const { entrydate, exitdate, days } = req.body;

  try {
    const trip = await Trip.findById(tripId);

    if (!trip) {
      // If trip is not found, send error response
      return res.status(404).json({ error: "Trip not found" });
    }

    if (entrydate) {
      trip.entrydate = entrydate;
    }
    if (exitdate) {
      trip.exitdate = exitdate;
    }
    if (days) {
      trip.days = days;
    }

    // Save the updated trip
    await trip.save();

    // Send success response
    res.status(200);
    return res.json({ message: "Trip updated successfully", trip });
  } catch (error) {
    // Handle error and send error response
    console.error("Error updating trip:", error);
    return res.status(500).json({ error: "Failed to update trip" });
  }
};

module.exports = { AddTrip, getAllTrips, deleteTrip, updateTrip };

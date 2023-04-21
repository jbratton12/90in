// get request to fetch all of the events from the database

const serverURL = "http://192.168.0.198:3000";
// Fetch all trips
const fetchTrips = async () => {
  const res = await fetch(serverURL + "/trips");
  const data = await res.json();
  return data;
};

// Post a trip to the DB
const postTrip = async (payload) => {
  const res = await fetch(serverURL + "/trips", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await res.json();
  return data;
};

// Delete Trip from the DB
const deleteFromDB = async (id) => {
  await fetch(`http://192.168.0.198:3000/trips/${id}`, {
    method: "DELETE",
  });
  return true;
};

//update trip in DB
const updateDB = async (id, updatedData) => {
  await fetch(`http://192.168.0.198:3000/trips/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updatedData), // Pass the updated data as JSON in the request body
    headers: {
      "Content-Type": "application/json",
    },
  });
  return true;
};

module.exports = { fetchTrips, postTrip, deleteFromDB, updateDB };

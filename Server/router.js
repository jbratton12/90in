const { Router } = require("express");
const router = Router();
const controllers = require("./controllers");

router.get("/trips", controllers.getAllTrips);

router.post("/trips", controllers.AddTrip);

router.patch("/trips/:id", controllers.updateTrip);

router.delete("/trips/:id", controllers.deleteTrip);

module.exports = router;

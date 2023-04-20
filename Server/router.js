const { Router } = require("express");
const router = Router();
const controllers = require("./controllers");

router.get("/trips", controllers.getAllTrips);

router.post("/trips", controllers.AddTrip);

// router.put("/trips", controllers.editTrip)

router.delete("/trips/:id", controllers.deleteTrip);

module.exports = router;

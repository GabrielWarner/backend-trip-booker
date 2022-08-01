const express = require('express');
const router = express.Router();
const travellerRoutes = require("./travellerController")
const locationRoutes = require("./locationController")
const tripRoutes = require("./tripController")

router.get("/",(req,res)=>{
    res.send("routing!")
})

router.use("/api/travellers",travellerRoutes)
//router.use("/api/locations", locationRoutes)
//router.use("/api/trips",tripRoutes)

module.exports = router;
const Location = require("./location.js");
const Trip = require("./trip.js");
const Traveller = require("./traveller.js")

Traveller.hasMany(Trip, {foreignKey: 'traveller_id',onDelete: 'cascade',})
Location.hasMany(Trip, {foreignKey: 'location_id',onDelete: 'cascade',})

// Traveller.belongsToMany(Trip)

// Location.belongsTo(Trip)
// Trip.belongsToMany(Location)

module.exports = {
    Location,
    Trip,
    Traveller
}
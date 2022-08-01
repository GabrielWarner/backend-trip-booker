const { timeStamp } = require('console');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model{}

Trip.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      trip_budget: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      traveller_amt:{
        type: DataTypes.INTEGER,
      },
      location_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'location',
            key: 'id',
          },
      },
      traveller_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'traveller',
            key: 'id',
          },
      },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trip',
})

module.exports=Trip
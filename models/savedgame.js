'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SavedGame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  SavedGame.init({
    group: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    homeTeam: DataTypes.STRING,
    awayTeam: DataTypes.STRING,
    pick_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SavedGame',
    tableName: 'savedgames'
  });
  return SavedGame;
};
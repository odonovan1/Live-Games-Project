'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pick extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Pick.belongsTo(models.User, { foreignKey: 'user_id ' })
      // Pick.belongsTo(models.Game, { foreignKey: 'game_id' })
    }
  }
  Pick.init({
    price: DataTypes.INTEGER,
    name: DataTypes.STRING,
    pick_id: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    game_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pick',
    tableName: 'picks'
  });
  return Pick;
};
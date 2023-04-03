'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Game.belongsToMany(models.User, {
        through: models.Comment,
        as: 'games',
        foreignKey: 'game_id'
      })
      Game.belongsTo(models.User, { foreignKey: 'user_id' })
      Game.belongsTo(models.Pick, { foreignKey: 'pick_id' })
    }
  }
  Game.init({
    group: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    homeTeam: DataTypes.STRING,
    awayTeam: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        ket: 'id'
      }
    }
    ,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    sequelize,
    modelName: 'Game',
    tableName: 'games'
  });
  return Game;
};
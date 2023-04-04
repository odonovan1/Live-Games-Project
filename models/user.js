'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Game, {
        through: models.Comment,
        as: 'games',
        foreignKey: 'user_id'
      })
      User.hasMany(models.Game, { foreignKey: 'user_id' })
      User.hasMany(models.Pick, { foreignKey: 'user_id' })
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordDigest: DataTypes.STRING,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};
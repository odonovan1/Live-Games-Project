'use strict';
const falso = require('@ngneat/falso')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      'comments',
      [
        {
          user_id: 1,
          game_id: 2,
          comment: falso.randWord(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 1,
          game_id: 1,
          comment: falso.randWord(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 1,
          game_id: 3,
          comment: falso.randWord(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 1,
          game_id: 4,
          comment: falso.randWord(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 1,
          game_id: 5,
          comment: falso.randWord(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 1,
          game_id: 6,
          comment: falso.randWord(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 1,
          game_id: 7,
          comment: falso.randWord(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 1,
          game_id: 8,
          comment: falso.randWord(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 1,
          game_id: 9,
          comment: falso.randWord(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 1,
          game_id: 10,
          comment: falso.randWord(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 1,
          game_id: 1,
          comment: falso.randWord(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 1,
          game_id: 1,
          comment: falso.randWord(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 1,
          game_id: 5,
          comment: falso.randWord(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 1,
          game_id: 5,
          comment: falso.randWord(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

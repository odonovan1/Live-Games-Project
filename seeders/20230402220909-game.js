'use strict';
const falso = require('@ngneat/falso')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const games = await Promise.all(
      [...Array(10)].map(async () => {
        return {
          group: falso.randSportsTeam(),
          title: falso.randAnimal(),
          description: falso.randWord(),
          homeTeam: falso.randSuperheroName(),
          awayTeam: falso.randSuperheroName(),
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return queryInterface.bulkInsert('games', games)
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

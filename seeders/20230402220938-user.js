'use strict';
const falso = require('@ngneat/falso')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // const users = await Promise.all(
    //   [...Array(10)].map(async () => {
    //     return {
    //       username: falso.randUserName(),
    //       email: falso.randEmail(),
    //       createdAt: new Date(),
    //       updatedAt: new Date()
    //     }
    //   })
    // )
    // return queryInterface.bulkInsert('users', users)
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

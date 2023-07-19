'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.sequelize.query(`

      CREATE SEQUENCE Genres_id_seq START 21;
      
      CREATE TABLE "Genres" (
        id INTEGER PRIMARY KEY DEFAULT nextval('Genres_id_seq'),
        name VARCHAR(255) NOT NULL,
        "createdAt" TIMESTAMPTZ,
        "updatedAt" TIMESTAMPTZ
      );

      ALTER SEQUENCE Genres_id_seq OWNED BY "Genres".id;
    `)
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Genres');
  }
};
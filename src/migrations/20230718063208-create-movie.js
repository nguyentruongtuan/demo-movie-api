'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.sequelize.query(`

      CREATE SEQUENCE Movies_id_seq START 1001;
      
      CREATE TABLE "Movies" (
        id INTEGER PRIMARY KEY DEFAULT nextval('Movies_id_seq'),
        title VARCHAR(255) NOT NULL,
        year INT NOT NULL,
        "createdAt" TIMESTAMPTZ,
        "updatedAt" TIMESTAMPTZ
      );

      ALTER SEQUENCE Movies_id_seq OWNED BY "Movies".id;
    `)
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Movies');
  }
};
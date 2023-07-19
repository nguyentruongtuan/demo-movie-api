'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.sequelize.query(`
      CREATE TABLE "MovieGenres" (
        id SERIAL PRIMARY KEY,
        "genreId" INT,
        "movieId" INT,
        "createdAt" TIMESTAMPTZ,
        "updatedAt" TIMESTAMPTZ,
        CONSTRAINT  fk_movie FOREIGN KEY ("movieId") REFERENCES "Movies"(id),
        CONSTRAINT  fk_genre FOREIGN KEY ("genreId") REFERENCES "Genres"(id)
      );
    `)
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movieGenres');
  }
};
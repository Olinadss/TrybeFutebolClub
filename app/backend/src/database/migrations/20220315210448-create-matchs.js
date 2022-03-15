'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matchs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      homeTeam: {
        type: Sequelize.STRING
      },
      homeTeamGoals: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      awayTeam: {
        allowNull: false,
        type: Sequelize.STRING
      },
      awayTeamGoals: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      inProgress: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('matchs');
  }
};
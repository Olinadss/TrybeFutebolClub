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
        type: Sequelize.INTEGER,
        field: 'home_team',
        references: {
          model: 'clubs',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      homeTeamGoals: {
        type: Sequelize.INTEGER,
        field: 'home_team_goals',
      },
      awayTeam: {
        type: Sequelize.INTEGER,
        field: 'away_team',
        references: {
          model: 'clubs',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      awayTeamGoals: {
        type: Sequelize.INTEGER,
        field: 'away_team_goals',
      },
      inProgress: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'in_progress',
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('matchs');
  }
};
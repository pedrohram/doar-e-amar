module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('categories', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
  }),

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('categories'),
};

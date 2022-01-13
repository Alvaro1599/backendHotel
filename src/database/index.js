const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('shoppingfy', 'postgres', '152220', {
	host: 'localhost',
	dialect: 'postgres',
	logging: false
});

module.exports = sequelize;

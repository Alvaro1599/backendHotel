const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('db_hotel_system', 'postgres', '152220', {
	host: 'localhost',
	dialect: 'postgres',
	logging: false
});

module.exports = sequelize;

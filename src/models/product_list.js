const { DataTypes } = require('sequelize');

const sequelize = require('../database/index');
const product_list = sequelize.define(
	'product_list',
	{
		quantity: {
			type: DataTypes.INTEGER
		}
	},
	{
		timestamps: false
	}
);

module.exports = product_list;

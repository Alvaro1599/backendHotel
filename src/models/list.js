const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');
const product = require('./products');
const list = sequelize.define(
	'list',
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		timestamps: false,
		freezeTableName: true
	}
);
list.hasMany(product);
module.exports = list;

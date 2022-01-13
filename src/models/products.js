const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');

const product = sequelize.define(
	'product',
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		note: {
			type: DataTypes.STRING,
			allowNull: false
		},
		img: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		timestamps: false,
		freezeTableName: true
	}
);

module.exports = product;

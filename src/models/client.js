const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');
const client = sequelize.define(
	'client',
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
		dni: {
			type: DataTypes.STRING,
			allowNull: false
		},
		correo: {
			type: DataTypes.STRING
		},
		celular: {
			type: DataTypes.INTEGER
		}
	},
	{
		timestamps: false,
		freezeTableName: true
	}
);

module.exports = client;

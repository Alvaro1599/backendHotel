const { Sequelize } = require('sequelize');
/* const product = require('../models/products');
const product_list = require('../models/product_list');
const list = require('../models/list');
const category = require('../models/category'); */
const sequelize = new Sequelize('shoppingfy', 'postgres', '152220', {
	host: 'localhost',
	dialect: 'postgres',
	logging: false
});

module.exports = sequelize;

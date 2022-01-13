const express = require('express');
const router = express.Router();
const createProducts = require('../controllers/crudProduct/createProduct');
const createList = require('../controllers/crudList/createList');
const createCategory = require('../controllers/crudCategory/createCategory');
const products = require('../models/products');
const list = require('../models/list');
const product_list = require('../models/product_list');
const category = require('../models/category');
const res = require('express/lib/response');
router.get('/', async (req, res) => {
	try {
		const newList = await list.findAll({
			include: [ { model: products } ]
		});
		res.status(200).json(newList);
	} catch (error) {
		console.log(error);
		res.status(400).send(error);
	}
});
router.post('/createCategory', createCategory);
router.post('/createList', createList);
router.post('/createProduct', createProducts);

module.exports = router;

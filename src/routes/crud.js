const express = require('express');
const router = express.Router();
const createProducts = require('../controllers/crudProduct/createProduct');
const createList = require('../controllers/crudList/createList');
const createCategory = require('../controllers/crudCategory/createCategory');
const products = require('../models/products');
const list = require('../models/list');
const updateProducts = require('../controllers/crudProduct/updateProduct');
const updateList = require('../controllers/crudList/updateList');
const updateCategory = require('../controllers/crudCategory/updateCategory');
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
/* update section */
router.put('/updateCategory', updateCategory);
router.put('/updateList', updateList);
router.put('/updateProduct', updateProducts);

/* end section */

/* create section */
router.post('/createCategory', createCategory);
router.post('/createList', createList);
router.post('/createProduct', createProducts);
/* end section */
module.exports = router;

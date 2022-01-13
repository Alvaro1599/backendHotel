const express = require('express');
const router = express.Router();
const createProducts = require('../controllers/crudProduct/createProduct');
const createList = require('../controllers/crudList/createList');
const createCategory = require('../controllers/crudCategory/createCategory');

router.post('/createCategory', createCategory);
router.post('/createList', createList);
router.post('/createProduct', createProducts);

module.exports = router;

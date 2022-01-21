const express = require('express');
const router = express.Router();

const createClient = require('../controllers/client/createClient');
const deleteClient = require('../controllers/client/deleteClient');
const updateClient = require('../controllers/client/updateClient');

router.delete('/user', deleteClient);
router.post('/user', createClient);
router.put('/user/:id', updateClient);

module.exports = router;

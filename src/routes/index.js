const express = require('express');

const router = express.Router();
const crud = require('./crud');
router.use('/api/v1/', crud);
module.exports = router;

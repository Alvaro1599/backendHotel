const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
app.use(
	cors({
		origin: '*',
		methods: 'GET, POST, PUT, DELETE',
		allowedHeaders: 'Content-Type, Authorization'
	})
);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('PORT', process.env.PORT || 5000);
app.use('/', require('./routes/index'));
module.exports = app;

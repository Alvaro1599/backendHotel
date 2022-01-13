const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('PORT', process.env.PORT || 5000);
app.use('/', require('./routes/index'));
module.exports = app;

const express = require('express');
const app = express.Router();
const { isLoggedIn, isAdmin } = require('./middleware');

app.use('/products', require('./products'));
app.use('/', require('./auth'));
app.use('/characters', require('./characters'));
module.exports = app;

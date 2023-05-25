require('dotenv').config();
const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const adminRoutes = require('./routes/admin');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/v1/admin', adminRoutes);

module.exports = app;
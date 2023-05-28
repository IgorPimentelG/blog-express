require('dotenv').config();
const { engine } = require('express-handlebars');
const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const logMiddleware = require('./middlewares/log');

const path = require('path');
const adminRoutes = require('./routes/admin');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));
app.use(flash());
app.use(logMiddleware);

app.use('/v1/admin', adminRoutes);

module.exports = app;
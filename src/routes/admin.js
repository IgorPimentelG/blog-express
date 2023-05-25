require('../db/models/Category');
const express = require('express');
const mongoose = require('mongoose');
const Category = mongoose.model('Category');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('admin/index');
});

router.get('/posts', (req, res) => {

});

router.get('/categories', (req, res) => {
  res.render('admin/categories');
});

router.get('/categories/add', (req, res) => {
  res.render('admin/add-categories');
});

router.post('/categories/add', (req, res) => {
  const category = { ...req.body };
  new Category(category)
    .save()
    .then(() => {
      console.log('Category saved successfully');
    })
    .catch((error) => {
      console.log('Error saving category');
    });
});

module.exports = router;
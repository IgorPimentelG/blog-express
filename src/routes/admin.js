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
  Category.find().lean().then((categories) => {
    res.render('admin/categories', { categories });
  }).catch(() => {
    req.flash('error_message', 'Não foi possível listar as categorias');
    res.redirect('/v1/admin');
  });
});

router.get('/categories/add', (req, res) => {
  res.render('admin/add-categories');
});

router.post('/categories/add', async (req, res) => {

  const errors = [];

  if (!req.body.name) {
    errors.push({ text: 'Please enter a name' });
  }

  if (!req.body.slug) {
    errors.push({ text: 'Please enter a slug' });
  }

  if (errors.length) {
    res.render('admin/add-categories', { errors });
  } else {
    const category = { ...req.body };
    await new Category(category)
      .save()
      .then(() => {
        req.flash('success_message', 'Categoria criada com sucesso');
      })
      .catch(() => {
        req.flash('error_message', 'Não foi possível criar a categoria');
      });
    res.redirect('/v1/admin/categories');
  }
});

module.exports = router;
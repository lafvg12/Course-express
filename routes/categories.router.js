const express = require('express');
const router = express.Router();
const CategoriesService = require('../services/categories.services');

const categories = new CategoriesService();

router.get('/', (req, res) => {
  const categoriesAll = categories.sendCategories();
  res.json(categoriesAll);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const categoriesID = categories.findOneUserId(id);
  res.json(categoriesID);
});

router.post('/', (req, res) => {
  const body = req.body;
  const category = categories.create(body);
  res.status(201).json(category);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const categoryDelete = categories.delete(id);
  res.json(categoryDelete);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const categoryPatch = categories.update(id, body);
  res.json(categoryPatch);
});

module.exports = router;

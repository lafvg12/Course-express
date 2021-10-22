const express = require('express');
const router = express.Router();
const ProductsService = require('../services/products.services');

const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const productsId = service.findOne(id);
  res.json(productsId);
});

// Route Post

router.post('/', (req, res) => {
  const body = req.body;
  const productNew = service.create(body);
  res.json(productNew);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deleteProduct = service.delete(id);
  res.json(deleteProduct);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const filterId = service.update(id, body);
  res.json(filterId);
});
module.exports = router;

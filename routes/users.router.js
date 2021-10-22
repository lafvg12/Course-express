const express = require('express');
const router = express.Router();
const UsersServices = require('../services/users.service');
const serviceUsers = new UsersServices();

router.get('/', (req, res) => {
  const users = serviceUsers.send();
  res.json(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const userId = serviceUsers.findUserId(id);
  res.json(userId);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newUser = serviceUsers.create(body);
  res.status(201).json(newUser);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const userDelete = serviceUsers.delete(id);
  res.json(userDelete);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const changeUsers = serviceUsers.update(id, body);
  res.json(changeUsers);
});
module.exports = router;

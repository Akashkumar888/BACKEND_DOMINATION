
const express = require('express');
const app = express();

app.use(express.json()); // for parsing application/json

// Mock in-memory data
let users = [
  { id: 1, name: 'Akash' },
  { id: 2, name: 'Aditya' }
];

// GET all users
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// GET single user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.status(200).json(user);
});

// POST - create a new user
app.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).send("Name is required");
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT - update entire user
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');

  const { name } = req.body;
  if (!name) return res.status(400).send("Name is required");

  user.name = name;
  res.status(200).json(user);
});

// PATCH - update part of user
app.patch('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');

  const { name } = req.body;
  if (name) user.name = name;

  res.status(200).json(user);
});

// DELETE - remove user
app.delete('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('User not found');

  const deletedUser = users.splice(index, 1);
  res.status(200).json(deletedUser[0]);
});

// HEAD - just send headers, no body
app.head('/users', (req, res) => {
  res.status(200).end();
});

// OPTIONS - list allowed methods
app.options('/users', (req, res) => {
  res.set('Allow', 'GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS').send();
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


// BUILD YOUR SERVER HERE
const db = require('./users/model');
const express = require('express');

const server = express();
server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ message: 'hello world' });
})

server.get('/api/users', async (req, res) => {
  try {
    const users = await db.find();
    if (users.length) {
      res.status(200).json(users);
    } else {
      res.status(404).json({ message: 'No users found...' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error GETing users...' });
  }
})

module.exports = server; // EXPORT YOUR SERVER instead of {}

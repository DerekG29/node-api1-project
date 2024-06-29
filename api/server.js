// BUILD YOUR SERVER HERE
const express = require('express');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ message: 'testing' });
})

module.exports = server; // EXPORT YOUR SERVER instead of {}

const express = require('express');
const db = require('./data/helpers/queries');

const server = express();
server.use(express.json());

server.get('/', async (req, res) => {
  try {
    const cars = await db.get();
    res.status(200).json(cars);
  } catch(err) {
    res.status(500).json(err);
  }
});

server.post('/', async (req, res) => {
  try {
    const newCar = await db.insert(req.body);
    res.status(201).json(newCar);
  } catch(err) {
    res.status(500).json(err);
  }
});

server.listen(5000, () => {
  console.log('server running on port 5000');
});
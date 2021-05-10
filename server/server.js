const path = require('path');
const express = require('express');
const cors = require('cors');

const portraitController = require('../utils/portraitController.js');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/emotions', portraitController.emotionParser, (req, res) => {
  return res.status(200).json(res.locals.emotions);
});

app.post('/costumes', portraitController.costumeParser, (req, res) => {
  return res.status(200).json(res.locals.costumes);
});

app.listen(PORT, () => {
  console.log(`Alibaba here! The Phantom Thieves are listening in on localhost:${PORT}!`);
});
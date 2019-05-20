const express = require('express');
const { sayHello, uppercase, firstCharacter, firstCharacters } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json(({ result: uppercase(req.params.string) }));
});

app.get('/strings/first-character/:string', (req, res) => {
  res.json(({ result: firstCharacter(req.params.string) }));
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.json(({ result: firstCharacters(req.params.string, req.query.length) }));
});

module.exports = app;

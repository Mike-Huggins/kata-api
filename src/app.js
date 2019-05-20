const express = require('express');
const { sayHello, uppercase, firstCharacter, firstCharacters } = require('./lib/strings');
const { add, subtract } = require('./lib/numbers');
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

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);
  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(a, b) });
  }
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);
  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(b, a) });
  }
});

module.exports = app;

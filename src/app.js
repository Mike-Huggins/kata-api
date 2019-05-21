const express = require('express');
const { sayHello, uppercase, firstCharacter, firstCharacters } = require('./lib/strings');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const app = express();

app.use(express.json());

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

app.post('/numbers/multiply', (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters \"a\" and \"b\" are required.' });
  } else {
    if (isNaN(a) || isNaN(b)) {
      res.status(400).json({ error: 'Parameters \"a\" and \"b\" must be valid numbers.' });
    } else {
      res.json(({ result: multiply(a, b) }));
    }
  }
});

app.post('/numbers/divide', (req, res) => {
  const { a, b } = req.body;
  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters a and b are required.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else if (Number(b) === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: divide(Number(a), Number(b)) });
  }
});

app.post('/numbers/remainder', (req, res) => {
  const { a, b } = req.body;
  if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else if (Number(b) === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: remainder(Number(a), Number(b)) });
  }
});

module.exports = app;

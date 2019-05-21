const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacter, firstCharacters } = require('../lib/strings');

const router = express.Router();

router.get('/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

router.get('/upper/:string', (req, res) => {
  res.json(({ result: uppercase(req.params.string) }));
});

router.get('/lower/:string', (req, res) => {
  res.json(({ result: lowercase(req.params.string) }));
});

router.get('/first-character/:string', (req, res) => {
  res.json(({ result: firstCharacter(req.params.string) }));
});

router.get('/first-characters/:string', (req, res) => {
  res.json(({ result: firstCharacters(req.params.string, req.query.length) }));
});

module.exports = router;

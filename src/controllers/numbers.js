const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

exports.add = (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);
  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(a, b) });
  }
};

exports.subtract = (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);
  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(b, a) });
  }
};

exports.multiply = (req, res) => {
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
};

exports.divide = (req, res) => {
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
};

exports.remainder = (req, res) => {
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
};

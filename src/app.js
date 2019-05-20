const express = require('express');
const { sayHello, uppercase, firstCharacter, firstCharacters } = require('./lib/strings');
const { add, subtract, multiply } = require('./lib/numbers');
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

app.post('/numbers/divide')

describe('POST /divide', () => {
    xit('divides two numbers', (done) => {
      chai.request(server)
        .post('/numbers/divide')
        .send({ a: 162, b: 3 })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 54 });
          done();
        });
    });

module.exports = app;

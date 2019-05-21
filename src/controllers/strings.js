const { sayHello, uppercase, lowercase, firstCharacter, firstCharacters } = require('../lib/strings');

exports.hello = (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
};

exports.uppercase = (req, res) => {
  res.json(({ result: uppercase(req.params.string) }));
};

exports.lowercase = (req, res) => {
  res.json(({ result: lowercase(req.params.string) }));
};

exports.firstcharacter = (req, res) => {
  res.json(({ result: firstCharacter(req.params.string) }));
};

exports.firstcharacters = (req, res) => {
  res.json(({ result: firstCharacters(req.params.string, req.query.length) }));
};

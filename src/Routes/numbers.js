const express = require('express');
const numbersController = require('../controllers/numbers');

const router = express.Router();

const { add, subtract, multiply, divide, remainder } = numbersController;

router.get('/add/:a/and/:b', add);

router.get('/subtract/:a/from/:b', subtract);  

router.post('/multiply', multiply);

router.post('/divide', divide);

router.post('/remainder', remainder);

module.exports = router;

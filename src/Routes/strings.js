const express = require('express');
const stringsController = require('../controllers/strings');

const router = express.Router();

const { hello, uppercase, lowercase, firstcharacter, firstcharacters } = stringsController;

router.get('/hello/:string', hello);

router.get('/upper/:string', uppercase);

router.get('/lower/:string', lowercase);

router.get('/first-character/:string', firstcharacter);

router.get('/first-characters/:string', firstcharacters);

module.exports = router;

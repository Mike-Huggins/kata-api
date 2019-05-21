const express = require('express');
const stringsRouter = require('./Routes/strings');
const numberRouter = require('./Routes/numbers');
const app = express();

app.use(express.json());

app.use('/strings', stringsRouter);
app.use('/numbers', numberRouter);

module.exports = app;

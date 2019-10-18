require('dotenv').config();
const express = require('express');
const app = express();

// express middleware
require('./config/express')(app);

// routing
app.use(require('./config/routes'));

// global error handling
app.use(require('./config/error-handler'));

module.exports = app;
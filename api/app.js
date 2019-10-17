const express = require('express');
const app = express();

// middleware
require('./config/express')(app);

// routing
app.use(require('./config/routes'));

module.exports = app;
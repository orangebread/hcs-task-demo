const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = function(req, res, next) {
  const token = req.headers["x-access-token"] || req.headers["authorization"];
  if (!token) return res.status(401).send("Access denied. No token provided.");
  try {
    const authToken = token.split(' ')[1];
    const decoded = jwt.verify(authToken, config.secret);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};
const router = require('express').Router();

const UserController = require('./user.controller');

router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.post('/login', UserController.authenticateUser);

module.exports = router;
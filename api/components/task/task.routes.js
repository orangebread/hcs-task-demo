const router = require('express').Router();
const auth = require("../../middleware/auth");
const TaskController = require('./task.controller');

router.get('/', auth, TaskController.getAllTasks);
router.get('/:id', auth, TaskController.getTaskById);
router.post('/', auth, TaskController.createTask);
router.delete('/:id', auth, TaskController.deleteTask);

module.exports = router;
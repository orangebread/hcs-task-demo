const router = require('express').Router();
const auth = require("../../middleware/auth");
const TasksController = require('./tasks.controller');

router.get('/', auth, TasksController.getAllTasks);
router.get('/:id', auth, TasksController.getTaskById);
router.post('/', auth, TasksController.createTask);
router.put('/:id', auth, TasksController.updateTask);
router.delete('/:id', auth, TasksController.deleteTask);

module.exports = router;
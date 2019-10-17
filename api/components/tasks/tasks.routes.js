const router = require('express').Router();

const TasksController = require('./tasks.controller');

router.get('/', TasksController.getAllTasks);
router.get('/:id', TasksController.getTaskById);
router.post('/', TasksController.createTask);
router.put('/:id', TasksController.updateTask);
router.delete('/:id', TasksController.deleteTask);

module.exports = router;
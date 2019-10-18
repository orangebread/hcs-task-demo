const db = require('../../config/db');
const Task = db.Task;

exports.getAllTasks = async (req, res) => {
    try {
        const { sub } = req.user;
        const tasks = await Task.find({ user: sub });
        
        res.json({ success: true, result: tasks });
    } catch (error) {
        res.status(500).json({ success: false, message: error, result: 'Could not find tasks for user' });
    }
}

exports.getTaskById = async (req, res) => {
    try {
        res.json({ success: true});
    } catch (error) {
        res.json({ success: false, message: error, result: 'Could not find task' });
    }
}

exports.createTask = async (req, res) => {
    try {
        const { sub } = req.user;
        const { description, due_date } = req.body;
        const task = new Task({ description, due_date, user: sub });

        await task.save();

        res.json({ success: true, message: 'Successfully created task'});
    } catch (error) {
        console.log('err', error);
        res.status(500).json({ success: false, message: 'Error creating task'});
    }  
    
}

exports.deleteTask = async (req, res) => {
    try {
        const { sub } = req.user;
        const { id } = req.params;
        const task = await Task.deleteOne({ _id: id, user: sub });

        if (task.deletedCount === 1) {
            res.json({ success: true, message: 'Successfully deleted task' });
        } else {
            throw new Error('Error deleting task');
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error, result: 'Could not delete task' });
    }
}
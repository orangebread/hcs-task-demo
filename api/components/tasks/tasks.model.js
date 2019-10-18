const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  description: {
    type: String,
    maxlength: 50
  },
  due_date: {
    type: String,
    minlength: 3,
    maxlength: 50
  },
  user: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  ]
}, {
    timestamps: true
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
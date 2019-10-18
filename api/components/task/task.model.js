const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    maxlength: 50
  },
  due_date: {
    type: Date,
    required: true
  },
  user: 
    { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minlength: 3,
    maxlength: 50
  },
  lastName: {
    type: String,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    sparse: true
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  tasks: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Task' }
  ]
}, {
  timestamps: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
const mongoose = require('mongoose');

const todoItemSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true},
  complete: {
    type: Boolean,
    default: false
  }
});

const TodoItem = mongoose.model('Todo', todoItemSchema);

module.exports = TodoItem;  

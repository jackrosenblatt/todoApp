const mongoose = require('mongoose');
const Schema = mongoose.Schema

const todoItemSchema = new Schema({
  task: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const TodoItem = mongoose.model('Todo', todoItemSchema);

module.exports = TodoItem;
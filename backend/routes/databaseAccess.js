const express = require('express');
const TodoItem = require('../models/TodoItem')
const router = express.Router();

router.post('/add', (req, res) => {
  const testTodo = new TodoItem({
    task: req.body.task
  });

  testTodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
});

module.exports = router;
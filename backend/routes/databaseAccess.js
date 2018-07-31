const express = require('express');
const router = express.Router();
var TodoItem = require('../models/TodoItem');

router.get('/add', (req,res)=> {

    const testTodo = new TodoItem({
    task: "test task"
  });

  testTodo.save()
    .then(res => {
      res.send(res);
    })
    .catch(error => {
      res.send(error);
    })
});

router.get('/toggle', (req,res)=> {
  res.send('Hello');
});

router.get('/removeTodo', (req,res)=> {
  res.send('Hello');
});


module.exports = router;

const express = require('express');
const router = express.Router();
var TodoItem = require('../models/TodoItem');

router.post('/add', (req,res)=> {
  console.log('GOT TO SEVERSIDE');
  console.log(req.body);

  const testTodo = new TodoItem({
    task: req.body.name
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

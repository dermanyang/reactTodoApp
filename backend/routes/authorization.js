const express = require('express');
const router = express.Router();

router.get('/login', (req,res)=> {
  res.send('Hello');
});

router.get('/logout', (req,res)=> {
  res.send('Hello');
});

router.get('/register', (req,res)=> {
  res.send('Hello');
});


module.exports = router;

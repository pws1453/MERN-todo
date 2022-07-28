const express = require('express');
const router = express.Router();
const Todo = require('../models/todo')
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()


router.get('/todos', (req, res, next) => {
  //Return all of the data
  Todo.find({}, 'action')
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/todos',jsonParser, (req, res, next) => {
  //placeholder
  console.log(req.body);
  if (req.body.action) {
    Todo.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.delete('/todos/:id', (req, res, next) => {
  //placeholder
  Todo.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;

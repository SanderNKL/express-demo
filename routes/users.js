var express = require('express');
var router = express.Router();

const users = [
  {
    id: 1,
    name: 'Alice'
  },
  {
    id: 2,
    name: 'Bob'
  },
  {
    id: 3,
    name: 'Charlie'
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json(users);
});

router.post('/', function(req, res, next) {
  const { name } = req.body;

  if (!name) { // if no name was provided, do this.
    return res.status(400).json({ message: "Name is required" });
  }

  const user = { id: users.length + 1, name };
  users.push(user);
  res.status(201).json(user);
})

router.put('/:id', function(req, res, next) {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Id is required" });
  }

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  // Endre på data i user array
  let user = users.find(user => user.id === id);
  if (user) {
    user.name = name;
    return res.status(200).json(user);
  }
  return res.status(404).json({ message: "User not found" });
});

module.exports = router;

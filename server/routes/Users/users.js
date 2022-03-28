var express = require('express');
var router = express.Router();
const { createUser, getSingleUser, updateUser, deleteUser } = require('./controller/UserController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create-user', createUser)
router.get('/get-user/:id', getSingleUser)
router.put('/update-user/:id', updateUser)
router.delete('/delete-user/:id', deleteUser)



module.exports = router;

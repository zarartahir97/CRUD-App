const express = require('express');
const router = express.Router();

const controller = require('../controllers/user-contoller');

router.get('/users', controller.read);

router.post('/registerUser', controller.create);

router.delete('/deleteUser/:id', controller.delete);

router.put('/updateUser/:id', controller.update);

module.exports = router;
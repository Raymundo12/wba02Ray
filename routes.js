const express = require('express'),
router = express.Router();

var itemCtrl = require('./item-controller'),
userCtrl = require('./user-controller');

router.get('hello', itemCtrl.getWorld);

router.get('hello/foo/:bar', itemCtrl.getWorldParams );

router.post('hello', itemCtrl.postWorld);

router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('./users/:id', userCtrl.getUser);

module.exports = router;
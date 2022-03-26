const express = require("express"),
      router = express.Router(),
      itemCtrl = require("./item-controller");

 
      router.get("/:foot/:bar", itemCtrl.helloWorld);

module.exports = router;
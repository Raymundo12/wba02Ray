const express = require("express"),
      router = express.Router();

      router.get("/", (req, res)=>{
        res.json({message: "Hello Wolrd!"})
    });

module.exports = router()      
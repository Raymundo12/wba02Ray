const express = require("express"),
      router = express.Router(),
      itemCtrl = require("./item-controller");
      userCtrl = require("./user-controller");
      
      module.exports.UPLOAD_PATH = 'uploads'; 
 
      var multer = require('multer'), 
      upload = multer({ dest: module.exports.UPLOAD_PATH }), 
      imageCtrl = require('./image-controller');
            
 
      router.get("/:foot/:bar", itemCtrl.helloWorld);

router.post('/images', upload.single('image'), imageCtrl.uploadImage); 
router.get('/images', imageCtrl.getImages); 
router.get('/images/:id', imageCtrl.getImage); 
router.delete('/images/:id', imageCtrl.deleteImage);


module.exports = router;

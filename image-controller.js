const UPLOAD_PATH = require('./routes').UPLOAD_PATH
Image = require('./models/image');
path = require('path'),
fs = require('fs'),
del = require('del');

exports.uploadImage = function(req, res)  {

    let newImage = new Image ();
    newImage.filename = req.filename;
    newImage.originalName = req.file.originalName;
    newImage.desc = req.body.desc;
    newImage.setPointerCapture(err => {
         if (err){
             return res.sendStatus(400);
         }
         res.status(201).send({newImage})
    });
};

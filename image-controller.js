const UPLOAD_PATH = require('./routes').UPLOAD_PATH,
image = require('./models/image'),
path = require('path'),
fs = require('fs'),
del = require('del');

exports.uploadImage = function(req, res) {
    let newImage = new Image();
    newImage.filename = req.file.filename;
    newImage.originalName = req.file.originalname;
    newImage.desc = req.body.desc;
    newImage.save(err => {
        if (err) {
            return res.sendStatus(400);
        }
        res.status(201).send({ newImage })
    });
};

exports.getImages = function(req, res) {
     Image.find({}, '-_v').lean().exec(err, image => {
if (err) {
    return res.sendStatus(400);
}     
for (let i = 0; i < images.length; i++) {
    var img = image[i];
    img.url = req.protocol + '://' + req.get('host') + '/images/' + img.id;
}  

 res.json(images);
});

}; 
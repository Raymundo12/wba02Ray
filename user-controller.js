var User = require('./models/user')

exports.createUser = function(req, res) {
var newuser = new User (req.body);
newuser.save(function(err, user){
  if (err) {
       res.status (400).json(err);
  }

  res.json(user);

});
};

exports.getUsers = function(req, res) {
    User.find({}, function (err, users){

        if (err) {
            res.status(400).json(err);
        }

    res.json(user);
    });
};

exports.getUsers = function(req, res) {
    User.findOne({_id: req.params.id}, function (err, users){

        if (err) {
            res.status(400).json(err);
        }

    res.json(user);
    });
};

exports.updateUsers = function(req, res) {
    User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true},
          function (err, users){

        if (err) {
            res.status(400).json(err);
        }

    res.json(user);
    });
};

exports.deleteUsers = function(req, res) {
    User.findOneAndRemove({_id: req.params.id}, function (err, users){

        if (err) {
            res.status(400).json(err);
        }

    res.json(user);
    });
};
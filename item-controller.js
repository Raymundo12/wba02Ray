exports.getWorld = function(req,res) {
  res.json({result:'Hello Word from Controller'});
 }

 exports.getWorldParams = function(req,res){
    res.json({message: 'Hello World', data: [
        req.params.foo,
        req.params.bar
    ]});
 };

 exports.postWorld = function (req, res) {
     res.json({result: 'post was sent', data: req.body});

 };
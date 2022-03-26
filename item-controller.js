exports.helloWorld = function(req, res){
     
    res.json({message: "Hello Wolrd!",
    data: [
       req.params.foo,
       req.params.bar 
    ]});
}
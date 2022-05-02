const http = require("http");
     logger = require("morgan"),
     express = require ("express"), 
     bodyParser = require("body-parser");
     mongoose = require("mongoose");


let app = express();
let port = 8000;

app.use(require("./routes"));
app.use(bodyParser.json());
app.use(logger("tiny"));

mongoose.connect('mongodb://localhost/test'); 

mongoose.connection.on('error', (err) => {
    console.log('Mongodb Error: ', err);
    process.exit();
});

mongoose.connection.on('connected', () => {
    console.log('MongoDB is successfully connected');
});

app.listen(port, function(err){
    console.log("listening on port: " + port)

});
const http = require("http");
     logger = require("morgan"),
     express = require ("express"), 
     bodyParser = require("body-parser");
     mongoose = require('mongoose');


let app = express();
let port = 5000;

app.use(require("./routes"));
app.use(bodyParser.json());
app.use(logger("tiny"));

app.listen(port, function(err){
    console.log("listening on port: "+ port)

const dbURI = "mongodb://localhost/test";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => console.log('connected to db'))
.catch((err) => console.log(err));





});
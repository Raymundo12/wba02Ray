const http = require("http");
const { default: mongoose } = require("mongoose");
     logger = require("morgan"),
     express = require ("express"), 
     bodyParser = require("body-parser");
     mongoose = require('mongoose');


let app = express();
let port = 5000;

app.use(require("./routes"));
app.use(bodyParser.json());
app.use(logger("tiny"));

const dbURI = "mongodb://localhost/test";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => console.log('connected to db'))
.catch((err) => console.log(err));

mongoose.connection.on('error', (err) => {
    console.log('Mongodb Error:', err);
    process.exit();
});

mongoose.connection.on('connected', () => {
    console.log('MongoDB is successfully connected');
});

app.listen(port, function(err){
    console.log("listening on port: "+ port)

app.post('/users', userCtrl.createUser);
app.get('/users', userCtrl.getUsers);
app.get('/users/id', userCtrl.getUser);
app.delete('/users/:id', userCtrl.deleteUser);
app.put('/users/:id', userCtrl.updateUser);



});
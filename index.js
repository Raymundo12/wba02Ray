const http = require('http'),
axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser');
mongoose = require('mongoose');

var app = express();
var port = 8000;

app.use(bodyParser.json());
app.get('Hello/:foo:bar', (req, res) => {
res.json({message: "Hello BScBest!", data: [
   req.params.foo,
   req.params.bar

]});
});

app.use(logger('tiny'));
app.use(require('./routes'));

//http.createServer((req, res)=>{
  //res.write(users.join("\n")); //display the list of users on the page
  //res.end(); //end the response
//}).listen(8000); // listen for requests on port 8000

let users = []; // names of users will be stored here
(async function getNames(){
  try{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
    users = data.map(user=>user.email);
    console.log(users)
  } catch(error){
    console.log(error)
  }
})()

app.listen(port, function(err) {
console.log('Listening on port: ' + port) ; 

});
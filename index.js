const http = require("http");

axios = require("axios");
mongoose = require(mongoose);
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

})

module.exports = mongoose.model('User', userSchema);


http.createServer((req, res)=>{
   res.write(users.join(", ")); 
   res.end()
}).listen(8000); 

let users = [];


const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, lowercase: true},
    password: String,
    username: String,
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE']
    },
    phone: Number
})

module.exports = mongoose.model('User', userSchema);


(async function getNames(){
   try{
     const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
     users = data.map(user=>user.name)            
   } catch(erorr){
       console.log(error)
   } 
     
});
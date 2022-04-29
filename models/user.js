const mongoose = require('mongoose'); 


var imageSchema = new mongoose.Schema({ 
    filename: String, 
    originalName: String, 
    desc: String, 
    created: Date 
}); 
 
module.exports = mongoose.model('Image', imageSchema);

  const userSchema = new mongoose.Schema({  
      email: { type: String, unique: true, lowercase: true}, 
      password: String, 
      username: String, 
      gender: {  
          type: String, 
          enum: ['MALE', 'FEMALE'] 
      }, 
      phone: Number  
  }); 
 
  module.exports = mongoose.model('User', userSchema);

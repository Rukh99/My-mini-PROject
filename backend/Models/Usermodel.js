const {Schema, model} = require('../connection');

const myschema = new Schema({
    firstName: String , 
    lastName: String, 
    password: String ,
     email: String,
     education: String,
     experience: String,
     skills: String,
     strength:String,
    
});

module.exports = model('user', myschema);
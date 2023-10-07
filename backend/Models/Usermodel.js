const {Schema, model} = require('../connection');

const myschema = new Schema({
    firstName: String , 
    lastName: String, 
    password: String ,
     email: String
    
});

module.exports = model('user', myschema);
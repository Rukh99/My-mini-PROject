const {Schema, model} = require('../connection');

const myschema = new Schema({
    name: String , 
    description: String,  
      amount: Number,
     duration: String,
     technology: String,
     category: String,
    reference:String
});

module.exports = model('project', myschema);
const mongoose = require('mongoose');

const url = "mongodb+srv://rukhsarqureshi469:sharukh@cluster0.cjsv2si.mongodb.net/freelancing?retryWrites=true&w=majority";

// asynchronous function - return Promise object
mongoose.connect(url)
.then((result) => {
    // console.log(result);
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;
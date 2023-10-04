const mongoose = require('mongoose');

const url = "mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/mern11aug?retryWrites=true&w=majority";

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
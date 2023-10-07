// import express
const express = require('express');
const userRouter = require('./Routers/UserRouter');
const ProjectRouter=require('./Routers/ProjectRouter');
const cors = require('cors');

// initialize express
const app = express();
const port = 5000;

// middlewares

app.use(express.json());
app.use( cors({
    origin: ['http://localhost:3000']
}));

app.use( '/user', userRouter )
app.use('/project', ProjectRouter)

// routes
app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/home', (req, res) => {
    res.send('response from home');
});

app.get('/add', (req, res) => {
    res.send('response from add');
})

app.listen(port, () => {
    console.log('server started');
});


// step -1 : npm init -y
// step -2 : npm i express
// step -3 : index.js
// step -4 : routers(userRouter.js)
// step -5 : connection.js
// step -6 : npm i mongoose
// step -7 : models(userModel.js)
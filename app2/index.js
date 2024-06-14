require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

const indexRoutes = require("./routes/index")

app.use('/', indexRoutes)

app.listen(PORT, () =>{
    console.log(`app2 server started on port ${PORT}`);
})

const recieveMessage = require('./messagequeue/recieve')

recieveMessage()
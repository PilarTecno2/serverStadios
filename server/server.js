const express = require('express')
const app = express()

// db conection 
const mongoose = require('mongoose')
mongoose
    .connect('mongodb://localhost/stadium-app')
    .then(() => console.log('me conecte wachin'))


// Model
const stadium = require('./models/stadium.model')

// Cors 

const cors = require('cors')
app.use(cors());



// Roputing


// endpoint 1:
app.get('/api/stadium', (req, res) => {
    stadium
        .find()
        .then(allStadium => res.json(allStadium))    
});

// endpoint 2:
app.get('/api/id/625b1ac8e4114b64febc5d63', (req, res) => {
    stadium
        .findById("625b1ac8e4114b64febc5d63")
        .then(stadium=> res.json(stadium))    
});

// endpoint 3 URL dinamica:
app.get('/api/id/:stadium_id', (req, res) => {

    const { stadium_id } = req.params

    stadium
        .findById(stadium_id)
        .then(stadium => res.json(stadium))    
});

app.listen(5005, () => console.log("servidor levantado"));


const express = require('express')
const app = express()



// db conection 
const mongoose = require('mongoose')
mongoose
.connect('mongodb://localhost/stadium')
.then(() => console.log('me conecte con la DB'))



// Model
const Stadium = require('./models/Stadium.model')

//Cors 

const cors = require('cors')
app.use(cors());

// Roputing

// endpoint 1:
// app.get('/api/stadiums', (req, res) => {
    //     Stadium
    //         .find()
    //         .then(allStadium => res.json(allStadium))    
    // });
    
    // endpoint 2:
    // app.get('/api/details/62750e8780dba78c2efea222', (req, res) => {
        //     Stadium
        //         .findById("62750e8780dba78c2efea222")
        //         .then(stadium=> res.json(stadium))    
        // });
        
        
        // endpoint 3 URL dinamica:
        
app.get('/api/id/:stadium_id', (req, res) => {

    const { stadium_id } = req.params

    Stadium
    .findById(stadium_id)
        .then(stadium => res.json(stadium))    
});

app.listen(5005, () => console.log("server up"));
const mongoose = require('mongoose')

const stadiumSchema = mongoose.Schema({
    title: String,
    capacidad: Number,
    descripcion: String,
    image: String  
})

const Stadium = mongoose.model('stadium', stadiumSchema)

module.exports = Stadium; 
const mongoose = require('mongoose')

const StadiumSchema = mongoose.Schema({
    title: String,
    capacidad: Number,
    descripcion: String,
    image: String  
})

const stadium = mongoose.model('stadium', StadiumSchema)

module.exports = stadium; 
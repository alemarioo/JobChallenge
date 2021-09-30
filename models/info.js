const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const Lugar = new Schema({
    nombre: String,
    longitud: Number,
    latitud: Number
});

module.exports = model("Lugar", Lugar)
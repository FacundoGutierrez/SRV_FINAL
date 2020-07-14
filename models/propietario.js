const mongoose = require('mongoose');

const {Schema} = mongoose;

const PropietariosSchema = new Schema({

            
            apellido: {type: String, required:true},
            nombres: {type: String, required:true},
            dni: {type: Number, required:true},
            email: {type: String, required:true},
            telefono: {type: Number, required:true},
           
})

module.exports = mongoose.model('Propietario', PropietariosSchema);
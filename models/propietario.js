const mongoose = require('mongoose');
const {Schema} = mongoose;

const PropietariosSchema = new Schema({

            id: {type: Number, required:true},
            apellido: {type: String, required:true},
            nombres: {type: String, required:true},
            dni: {type: Number, required:true},
            email: {type: String, required:true},
            teléfono: {type: Number, required:true}
})

module.exports = mongoose.model('Propietario', PropietariosSchema);
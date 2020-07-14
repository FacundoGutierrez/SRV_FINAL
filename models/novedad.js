const mongoose = require('mongoose');
const Usuario = require('./usuario');
const {Schema} = mongoose;

const NovedadesSchema = new Schema({

    
    
    texto: {type: String, required:true},
    estado: {type: String, required:true},
    usuarios: {type: Schema.Types.ObjectId, ref: Usuario, required:true}
})

module.exports = mongoose.model('Novedades', NovedadesSchema);


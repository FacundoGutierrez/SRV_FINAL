const mongoose = require('mongoose');
const {Schema} = mongoose;

const UsuarioSchema = new Schema({
    
      // mongodb asigna las ID
    usuario: {type: String, required:true}, //email
    password: {type: String, required:true}, 
    activo: {type: Boolean, required:true} ,
    perfil: {type: String, required:true} //admin, propietario

})

 module.exports = mongoose.model('Usuario', UsuarioSchema);

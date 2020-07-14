const mongoose = require('mongoose');
const Propietario = require('./propietario');
const LocalesCtrl = require('../controllers/locales.controllers');
const Local = require('./local')
const {Schema} = mongoose;

const ContratoSchema = new Schema({

    
    
    fecha: {type: Date, required:true},
    propietario: {type: Schema.Types.ObjectId, ref: Propietario, required:true},
    locales: [{type:Schema.Types.ObjectId, ref:Local, required:true}],
    costoTotalAlq: {type: Number, required:true},

})

module.exports = mongoose.model('Contratos', ContratoSchema);
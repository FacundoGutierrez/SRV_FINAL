console.log("cargo contratos.route");
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const ContratoCtrl = require('./../controllers/contratos.controller');

// definiendo rutas
router.get('/', ContratoCtrl.getContrato);
router.post('/', ContratoCtrl.createContratos);

router.put('/:id', ContratoCtrl.editContratos);
router.delete('/:id', ContratoCtrl.deleteContratos);

//exportacion del modulo de rutas
module.exports = router;
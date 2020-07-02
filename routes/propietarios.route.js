console.log("cargo propietarios.route");
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const PropietariosCtrl = require('./../controllers/propietarios.controller');

// definiendo rutas
router.get('/', PropietariosCtrl.getPropietarios);
router.post('/', PropietariosCtrl.createPropietario);

router.put('/:id', PropietariosCtrl.editPropietarios);
router.delete('/:id', PropietariosCtrl.deletePropietarios);

//exportacion del modulo de rutas
module.exports = router;
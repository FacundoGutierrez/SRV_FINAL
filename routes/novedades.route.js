console.log("cargo novedades.route");
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const NovedadesCtrl = require('./../controllers/novedades.controllers');

// definiendo rutas
router.get('/', NovedadesCtrl.getNovedad);
router.post('/', NovedadesCtrl.createNovedades);

router.put('/:id', NovedadesCtrl.editNovedades);
router.delete('/:id', NovedadesCtrl.deleteNovedades);

//exportacion del modulo de rutas
module.exports = router;
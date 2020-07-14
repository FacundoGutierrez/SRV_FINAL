console.log("cargo locales.route");
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const LocalesCtrl = require('./../controllers/locales.controllers');

// definiendo rutas
router.get('/', LocalesCtrl.getLocal);
router.post('/', LocalesCtrl.createLocales);

router.put('/:id', LocalesCtrl.editLocales);
router.delete('/:id', LocalesCtrl.deleteLocales);

//exportacion del modulo de rutas
module.exports = router;
console.log("cargo noticias.route");
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const noticiasCtrl = require('./../controllers/noticias.controller');

// definiendo rutas
router.get('/', noticiasCtrl.getNoticia);
router.post('/', noticiasCtrl.createNoticias);

router.put('/:id', noticiasCtrl.editNoticias);
router.delete('/:id', noticiasCtrl.deleteNoticias);

//exportacion del modulo de rutas
module.exports = router;
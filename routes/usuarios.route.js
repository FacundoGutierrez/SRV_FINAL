console.log("cargo usuarios.route");
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const UsuariosCtrl = require('./../controllers/usuarios.controller');

// definiendo rutas
router.get('/', UsuariosCtrl.getUsuarios);
router.post('/', UsuariosCtrl.createUsuarios);
router.post('/login',UsuariosCtrl.loginUsuario);
router.put('/:id', UsuariosCtrl.editUsuarios);
router.delete('/:id', UsuariosCtrl.deleteUsuarios);

//exportacion del modulo de rutas
module.exports = router;
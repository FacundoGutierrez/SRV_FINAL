const Usuario = require('../models/Usuario'); 


const UsuariosCtrl = {}

UsuariosCtrl.getUsuarios = async (req, res) => {
    Usuarios = await Usuario.find({activo:true}).sort({usuario:-1});
    res.json(Usuarios);
}

UsuariosCtrl.loginUsuario = async (req, res)=>{
    //en req.body se espera que vengan las credenciales de login
    //defino los criterios de busqueda en base al username y password recibidos
    const criteria = {
    usuario: req.body.usuario,
    password: req.body.password
    }
    //el método findOne retorna un objeto que cumpla con los criterios de busqueda
    Usuario.findOne(criteria, function(err, user) {
    //el método findOne retorna un objeto que cumpla con los criterios de busqueda
    if (err) {
    res.json({
    status: 0,
    message: 'error'})
    };
    if (!user) {
    res.json({
    status: 0,
    message: "not found" })
    } else {
    res.json({
    status: 1,
    message: "success",
    usuario: user.usuario,
    perfinl: user.perfil });
    }
    })
   }
   

UsuariosCtrl.createUsuarios = async (req, res) => {
    console.log("entro create sector");
    const Usuarios = new Usuario(req.body);
    await Usuarios.save();
    res.json({
        'status': 'Usuarios saved'
    });
}

UsuariosCtrl.editUsuarios = async (req, res) => {
    /*const Usuarios = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        urlmapa: req.body.urlmapa,
        ultimaModificacion: req.body.ultimaModificacion,
        sector: req.body.sector
    };*/
    const vUsuarios =  new Usuario (req.body);

    await Usuario.findByIdAndUpdate(req.params.id, {$set: vUsuarios}, {new: true});
    res.json({
        'status': 'Usuarios updated'
    })
}

UsuariosCtrl.deleteUsuarios = async (req, res)=>{
    await Usuario.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Usuarios removed'
    })
}
module.exports= UsuariosCtrl;
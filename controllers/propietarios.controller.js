const Propietario= require('../models/propietario'); 


const PropietariosCtrl = {}

PropietariosCtrl.getPropietarios= async (req, res) => {
    propietarios = await Propietario.find();
    res.json(propietarios);
}

PropietariosCtrl.createPropietario = async (req, res) => {
    console.log("entro create propietario");
    const propietario = new Propietario(req.body);
    await propietario.save();
    res.json({
        'status': 'Propietario saved'
    });
}

PropietariosCtrl.editPropietarios= async (req, res) => {
   
    const vPropietarios=  new Propietario(req.body);

    await Propietario.findByIdAndUpdate(req.params.id, {$set: vPropietarios}, {new: true});
    res.json({
        'status': 'Propietarios updated'
    })
}

PropietariosCtrl.deletePropietarios= async (req, res)=>{
    await Propietario.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Propietarios removed'
    })
}
module.exports= PropietariosCtrl;
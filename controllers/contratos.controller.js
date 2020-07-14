const Contratos= require('../models/contrato'); 

const ContratosCtrl = {}
ContratosCtrl.getContrato = async (req, res) => {
    contratos = await Contratos.find().populate("propietario").populate("locales");
    res.json(contratos);
}

ContratosCtrl.createContratos = async (req, res) => {
    const contratos= new Contratos(req.body);
    //const sector = await Sector.findById(req.params.id);
    //const Contratos.sector = sector;
    await contratos.save();
    res.json({
        'status': 'Contratos saved'
    });
}

ContratosCtrl.editContratos= async (req, res) => {
    /*const Contratos= {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        urlmapa: req.body.urlmapa,
        ultimaModificacion: req.body.ultimaModificacion,
        sector: req.body.sector
    };*/
    const vContratos =  new Contratos(req.body);

    await Contratos.findByIdAndUpdate(req.params.id, {$set: vContratos}, {new: true});
    res.json({
        'status': 'Contratos updated'
    })
}

ContratosCtrl.getContratos = async (req, res) => {
    const contratos= await Contratos.findById(req.params.id).populate("usuarios");
    res.json(contratos);
}

ContratosCtrl.deleteContratos = async (req, res)=>{
    await Contratos.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Contratos removed'
    })
}
module.exports= ContratosCtrl;
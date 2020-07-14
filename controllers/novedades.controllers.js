const Novedades= require('../models/novedad'); 

const NovedadesCtrl = {}
NovedadesCtrl.getNovedad = async (req, res) => {
    novedades = await Novedades.find().populate("usuarios");
    res.json(novedades);
}

NovedadesCtrl.createNovedades = async (req, res) => {
    const novedades= new Novedades(req.body);
    //const sector = await Sector.findById(req.params.id);
    //const Novedades.sector = sector;
    await novedades.save();
    res.json({
        'status': 'Novedades saved'
    });
}

NovedadesCtrl.editNovedades= async (req, res) => {
    /*const Novedades= {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        urlmapa: req.body.urlmapa,
        ultimaModificacion: req.body.ultimaModificacion,
        sector: req.body.sector
    };*/
    const vNovedades =  new Novedades(req.body);

    await Novedades.findByIdAndUpdate(req.params.id, {$set: vNovedades}, {new: true});
    res.json({
        'status': 'Novedades updated'
    })
}

NovedadesCtrl.getNovedades = async (req, res) => {
    const novedades= await Novedades.findById(req.params.id).populate("usuarios");
    res.json(novedades);
}

NovedadesCtrl.deleteNovedades = async (req, res)=>{
    await Novedades.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Novedades removed'
    })
}
module.exports= NovedadesCtrl;
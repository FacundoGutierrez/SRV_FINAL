const Noticias= require('../models/noticia'); 

const NoticiasCtrl = {}
NoticiasCtrl.getNoticia = async (req, res) => {
    noticias = await Noticias.find().populate("usuarios");
    res.json(noticias);
}

NoticiasCtrl.createNoticias = async (req, res) => {
    const noticias= new Noticias(req.body);
    //const sector = await Sector.findById(req.params.id);
    //const Noticias.sector = sector;
    await noticias.save();
    res.json({
        'status': 'Noticias saved'
    });
}

NoticiasCtrl.editNoticias= async (req, res) => {
    /*const Noticias= {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        urlmapa: req.body.urlmapa,
        ultimaModificacion: req.body.ultimaModificacion,
        sector: req.body.sector
    };*/
    const vNoticias =  new Noticias(req.body);

    await Noticias.findByIdAndUpdate(req.params.id, {$set: vNoticias}, {new: true});
    res.json({
        'status': 'Noticias updated'
    })
}

NoticiasCtrl.getNoticias = async (req, res) => {
    const noticias= await Noticias.findById(req.params.id).populate("usuarios");
    res.json(noticias);
}

NoticiasCtrl.deleteNoticias = async (req, res)=>{
    await Noticias.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Noticias removed'
    })
}
module.exports= NoticiasCtrl;
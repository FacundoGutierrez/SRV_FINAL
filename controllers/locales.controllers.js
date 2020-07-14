const Locales= require('../models/local'); 


const LocalesCtrl = {}

LocalesCtrl.getLocal= async (req, res) => {
    locales = await Locales.find();
    res.json(locales);
}

LocalesCtrl.createLocales = async (req, res) => {
    console.log("entro create Locales");
    const locales = new Locales(req.body);
    await locales.save();
    res.json({
        'status': 'Locales saved'
    });
}

LocalesCtrl.editLocales= async (req, res) => {
   
    const vLocales=  new Locales(req.body);

    await Locales.findByIdAndUpdate(req.params.id, {$set: vLocales}, {new: true});
    res.json({
        'status': 'Locales updated'
    })
}

LocalesCtrl.deleteLocales= async (req, res)=>{
    await Locales.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Locales removed'
    })
}
module.exports= LocalesCtrl;
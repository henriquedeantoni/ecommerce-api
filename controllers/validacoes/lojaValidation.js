const mongoose = require("mongoose");

const BaseJoi = require("joi");
const Extension = require("joi-date-extensions");

const Usuario = mongoose.model("Usuario");

const Loja = mongoose.model("Loja");

const LojaValidation = {

    admin: (req, res, next) =>{
    if(!req.payload.id) return res.sendStatus(401);
    const {loja} = req.query; //?loja=id
    if(!loja) return res.sendStatus(401);
    Usuario.findById(req.payload.id).then(usuario => {
        if(!usuario) return res.sendStatus(401);
        if(!usuario.loja) return res.sendStatus(401);
        if(!usuario.permissao.includes("admin")) return res.sendStatus(401);
        if(!usuario.loja.toString() !== loja) return res.sendStatus(401);
        next();
    }).catch(next);    
    }  
};

module.exports = { LojaValidation };
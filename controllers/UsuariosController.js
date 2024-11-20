const mongoose = require("mongoose");
const Usuario = mongoose.model("Usuario");
const enviarEmailRecovery = require("../helpers/email-recovery"); 

class UsuarioController{

    //GET/
    index(req, res, next){
        Usuario.findById(req.payload.id).then(usuario => {
            if(!usuario) return res.status(401).json({erros: "Usuario não registrado"});
            return res.json({usuario: usuario.enviarAuthJSON() })
            
        }).catch(next);
    }

    //GET/:id
    index(req, res, next){
        Usuario.findById(req.params.id).populate({path: "loja"}).then(usuario => {
            if(!usuario) return res.status(401).json({erros: "Usuario não registrado"});
            return res.json({
                usuario: {        
                    nome: usuario.nome,
                    email: usuario.email,
                    permissao: usuario.permissao,
                    loja: usuarios.loja
                }
            });
        }).catch(next);
    }

    // POST /registrar

    store(req, res, next){
        const { nome, email, password} = req.body;

        const usuario = new Usuario({ nome, email });
        usuario.setSenha(password);

        usuario.save().then(() => res.json({
            usuario: usuario.enviarAuthJSON()
        })).catch(next);
    }
}
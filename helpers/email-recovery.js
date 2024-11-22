const transporter =  require("nodemailer").createTransport(require("../config/email"));
const {root: link} = require("../config/index");

module.export = ({usuario, recovery}, cb ){
    const message = 
    `
        <h1 style = "text-align: center;"> Recuperação de Senha </h1>
        <br />
        <p> 
            Aqui está o link para redefinir a sua senha. Acesse ele e digite a sua nova senha:
        </p>
        <a href="${link}/v1/api/usuarios/senha-recuperada?token=${recovery.token}">
            ${link}/v1/api/usuarios/senha-recuperada?token=${recovery.token}
        </a>
        <br /><b/><hr />
        <p>
            Obs.: Se você não solicitou a redefinção, apenas ignore esse e-mail.
        </p>
        <br />

        <p> Atenciosamente, equipe loja online.</p>
    `;
}
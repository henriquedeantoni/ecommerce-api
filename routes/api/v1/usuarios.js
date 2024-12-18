const router = require("express").router();
const auth = require("../../auth");
const UsuarioController = require("../../../controllers/UsuarioController");

const Validation =  require("express-validation");
const {usuarioValidation} = require("../../../controllers/validacoes/usuarioValidation");

const usuarioController = new UsuarioController();

router.post("/login", Validation(usuarioValidation.login), usuarioController.login);
router.post("/registrar", Validation(usuarioValidation.store), usuarioController.store);
router.put("/", auth.required , Validation(usuarioValidation.update), usuarioController.update);
router.delete("/", auth.required, usuariosController.remove);

router.get("/recuperar-senha", usuariosController.showRecovery);
router.post("/recuperar-senha", usuariosController.createRecovery);
router.get("/senha-recuperada", usuarioController.showCompleteRecovery);
router.post("/senha-recuperada", usuarioController.completeRecovery);

router.get("/", auth.required, usuarioController.index);
router.get("/:id", auth.required, Validation(usuarioValidation.show), usuarioController.show);


module.exports = router;
const router = require("express").router();
const auth = require("../../auth");
const UsuarioController = require("../../../controllers/UsuarioController");

const usuarioController = new UsuarioController();
router.post("/login", usuarioController.login);
router.post("/registrar", usuarioController.store);
router.put("/", auth.required ,usuarioController.update);
router.delete("/", auth.required, usuariosController.remove);

router.get("/recuperar-senha", usuariosController.showRecovery);
router.post("/recuperar-senha", usuariosController.createRecovery);
router.get("/senha-recuperada", usuarioController.showCompleteRecovery);
router.post("/senha-recuperada", usuarioController.completeRecovery);

router.get("/", auth.required, usuarioController.index);
router.get("/:id", auth.required, usuarioController.show);


module.exports = router;
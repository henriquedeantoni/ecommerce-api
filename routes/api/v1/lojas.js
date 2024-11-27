const router = require("express").router();
const {LojaValidation} = require("../../../Controller/validacoes/lojaValidator");
const auth = require("../../auth");
const LojaController = require("../../../controllers/LojaController");

const lojaController = new LojaController();

router.get("/", lojaController.index);
router.get("/:id", lojaController.show);

router.post("/", auth.required, lojaController.store);
router.put("/:id", auth.required, LojaValidation.admin,  lojaController.update);
router.delete("/:id", auth.required, LojaValidation.admin, lojaController.remove);

module.exports = router;
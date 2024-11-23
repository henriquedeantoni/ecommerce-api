const router = require("express").router();
const lojaValidation = require("../../../Controller/validacoes/lojaValidator");
const auth = require("../../auth");
const LojaController = require("../../../controllers/LojaController");

const lojaController = new LojaController();

router.get("/", lojaController.index);
router.get("/:id", lojaController.show);

router.post("/", auth.required, lojaController.store);
router.put("/:id", auth.required, lojaValidation,  lojaController.update);
router.delete("/:id", auth.required, lojaValidation, lojaController.remove);

module.exports = router;
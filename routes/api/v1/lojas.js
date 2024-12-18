const router = require("express").router();
const auth = require("../../auth");

const Validation = require("express-validation");
const {LojaValidation} = require("../../../Controller/validacoes/lojaValidator");

const lojaController = new LojaController();
const LojaController = require("../../../controllers/LojaController");

router.get("/", lojaController.index);
router.get("/:id", Validation(LojaValidation.show), lojaController.show);

router.post("/",  auth.required, Validation(LojaValidation.store), lojaController.store);
router.put("/:id", auth.required, LojaValidation.admin, Validation(LojaValidation.update), lojaController.update);
router.delete("/:id", auth.required, LojaValidation.admin,  lojaController.remove);

module.exports = router;
const router = require("express").router();

router.use('/v1/api', require('./api/v1/'));
router.get('/', (req, res, next)=>res.send({ok: true}));

module.exports = router;
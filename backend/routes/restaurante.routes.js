const { Router } = require('express')
const restaurantesControllers = require('../controllers/restaurante.controllers')
const router = Router();
const tokenFunctions = require('../middlewares/verifyToken')

console.log(tokenFunctions)

router.get('/showAll', restaurantesControllers.showRestaurante)
router.get('/show/:id', restaurantesControllers.showById)
router.post('/create', restaurantesControllers.create)
router.delete('/delete/:id', restaurantesControllers.delete)
router.post('/edit',  restaurantesControllers.edit)

module.exports = router;
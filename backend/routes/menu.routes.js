const { Router } = require('express')
const menuControllers = require('../controllers/menu.controllers');
const router = Router();
const tokenFunctions = require('../middlewares/verifyToken')


console.log(tokenFunctions)
//router.get('/laruta', el middleware, el controlador)
router.get('/showAll', menuControllers.showMenu)
router.get('/show/:id', menuControllers.showById)
router.get('/showRestaurantMenus/:id', menuControllers.showRestaurantMenus)
router.post('/create',  menuControllers.create)
router.delete('/delete/:id', menuControllers.delete)
router.post('/edit', menuControllers.edit)

module.exports = router;
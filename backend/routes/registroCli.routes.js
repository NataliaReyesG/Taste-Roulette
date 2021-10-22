const { Router } = require('express')
const registroCliControllers = require('../controllers/RegistroCli.controllers')
const router = Router();
const tokenFunctions = require('../middlewares/verifyToken')

router.get('/', tokenFunctions.verifyToken, registroCliControllers.sayHi)
router.post('/signup', registroCliControllers.signup)
router.post('/signin', registroCliControllers.signin)

module.exports = router
const { Router } = require('express')
const registroResControllers = require('../controllers/RegistroRes.controllers')
const router = Router();
const tokenFunctions = require('../middlewares/verifyToken')

router.get('/', tokenFunctions.verifyToken, registroResControllers.sayHi)
router.post('/signup', registroResControllers.signup)
router.post('/signin', registroResControllers.signin)


module.exports = router
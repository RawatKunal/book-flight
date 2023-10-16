const router =require("express").Router()
const userController = require("../controller/userController")

router.post("/registeruser",userController.register)
router.post("/login",userController.login)

router.post('/example',userController.example)


router.post("/getuser",userController.getuser)

module.exports=router
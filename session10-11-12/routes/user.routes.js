const userController = require("../app/controller/user.controller")
const auth = require("../app/middleware/auth.middleware")
const router = require("express").Router()

router.post("/register", userController.register)

router.get("/",auth , userController.showAll)

router.post("/login", userController.login)

router.get("/profile", auth, userController.profile)

router.get("/:id", userController.getSingle)

router.put("/:id", userController.editSingle)

router.post("/logout",auth, userController.logOut)
router.post("/logoutAll",auth, userController.logOutAll)

router.delete("/", userController.delAll)

router.delete("/:id",auth, userController.delSingle)

router.post("/addAddress", auth, userController.addAddr)
router.delete("/addr/:id", auth, userController.delAddr)

module.exports = router

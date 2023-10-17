const taskController = require("../app/controller/task.controller")
const auth = require("../app/middleware/auth.middleware")
const router = require("express").Router()

router.post("/add", auth, taskController.add)
router.get("/", auth, taskController.getAllTasks)
router.get("/myTasks", auth, taskController.getAllTaskByUserID)
router.get("/:id", auth, taskController.getSingleTask)

module.exports = router
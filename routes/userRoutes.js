const { getAllUsers, addUsers, removeUsers, updateUsers } = require("../controllers/userController")

const router = require("express").Router()
router
    .get("/", getAllUsers)
    .post("/add", addUsers)
    .delete("/:UserId", removeUsers)
    .put("/:UserId", updateUsers)
module.exports = router
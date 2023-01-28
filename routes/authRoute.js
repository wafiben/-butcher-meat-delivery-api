const express = require("express");
const router = express.Router();
const {
  login,
  signUp,
  createAdmin,
  createUser,
} = require("../controllers/AuthWithEmailAndPassword");
router.post("/login", login);
router.post("/sign-up", signUp);
router.get("/admin", createAdmin);
router.get("/user", createUser);
module.exports = router;

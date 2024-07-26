const express = require("express");
const {
    signup,
    login,
    getAllUser,
    getUsers,
} = require("../controllers/user-controllers");

const router = express.Router()

router.use(express.json());


router.post("/api/auth/signup", signup);

router.post("/api/auth/login/", login); 

router.get("/api/user", getAllUser);

router.get("/api/users/:id", getUsers);

module.exports= router;
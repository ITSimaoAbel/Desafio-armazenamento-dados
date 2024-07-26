const express = require("express");
const {
    signup,
    login,
    getAllUser,
    getUsers,
} = require("./controllers/userController");

const app = express();


app.post("/api/auth/signup", signup);

app.post("/api/auth/login/", login); 

app.get("/api/user", getAllUser);

app.get("/api/users/:id", getUsers);

module.exports= router;
const express = require("express");
const {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    getAllUsers,
    searchUsers,
} = require("./controllers/userController");

const app = express();


app.post("/api/auth/signup", createUser);
app.post("/api/auth/login/", searchUsers); 
app.get("/api/user", getUserById);

app.get("/api/users/:id", updateUser);




module.exports= router;
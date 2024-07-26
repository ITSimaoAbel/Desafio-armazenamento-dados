const express = require("express");
const {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    getAllUsers,
    searchUsers,
} = require("./controllers/userController");
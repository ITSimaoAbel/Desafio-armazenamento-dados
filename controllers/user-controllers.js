const asyncHandler = require("express-async-handler");
const Users = require("../models/userController");;

module.exports = { createProduct, updateProduct, deleteProduct, getProduct, getAllProduct }
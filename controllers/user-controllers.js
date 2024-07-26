const asyncHandler = require("express-async-handler");
const Users = require("../models/user-model");

const signup = asyncHandler(async (req, res) => {
    const signUp = await Product.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
      });
    
      res.status(200).json({ message: "Registro feito com sucesso!",data: signUp,});
});

const login = asyncHandler(async (req, res) => {
  const signIn = await Users.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  res.status(200).json({ message: "Registro feito com sucesso!", data: signIn,  });
});

const getAllUser = asyncHandler(async (req, res) => {
  const user = await user.find();

  res.status(200).json({ message: "Todos usuarios", data: user });
});

const getUsers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Usuario ${req.params.id}`,});
});

module.exports = { signup, login, getAllUser, getUsers, }
const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./connect/database");

connectDB()

const port = process.env.PORT;

const app = express();
app.use(express.jason());
app.use(express.urlencoded({ extended: false }));

// My routes

app.use("/api/users", require("./routes/users-routs"));


app.get("/", (req, res) => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
});

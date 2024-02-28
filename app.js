const { Console } = require("console");
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve("./public")));
const port = process.env.port || 3001;
app.listen (port, () =>
console.log(`Servidor corriendo en Puesto ${port}`)
);
app.get ("/", (req,res) => {
    res.sendFile(path.resolve("./views/home.html"));
})
app.get ("/register", (req,res) => {
    res.sendFile(path.resolve("./views/register.html"));
})
app.get ("/login", (req,res) => {
    res.sendFile(path.resolve("./views/login.html"));
})
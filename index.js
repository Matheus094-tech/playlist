require("dotenv").config();
const express = require("express");
const connectToDb = require("./database/db");
const app = express();
const path = require("path");
const Music = require("./model/music");
const { create } = require("./model/music");

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

connectToDb();

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/admin", (req, res) => {
  res.render("admin");
});

app.post("/create", async (req, res) => {
  const music = req.body;
  await Music.create(music);
  res.redirect("/")
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);

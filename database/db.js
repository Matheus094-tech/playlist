const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Conectado"))
    .catch((err) => console.error(err));
}

module.exports = connectToDb;

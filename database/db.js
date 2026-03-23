const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect("removido temporariamente para fazer commit")
    .then(() => {
      console.log("MongoDB Atlas CONECTADO!");
    })
    .catch((err) => console.log(err));
};
module.exports = connectToDb;
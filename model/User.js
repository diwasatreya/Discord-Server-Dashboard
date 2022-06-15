 // * Code Owner: Diwas Atreya (Atreya#2401)
 // * Github: https://github.com/diwasatreya
 // * Contact on Twitter: https://twitter.com/DiwasAtreya

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   name: String,
  email: String,
  password: String,
  apiauth: String
});

module.exports = mongoose.model("User", userSchema);
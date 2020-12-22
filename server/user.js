const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")
const Schema = mongoose.Schema
const userSchema = new Schema({
  name: {
    type: String,
    default: "",
  },
  about: {
    type: String,
    default: "",
  },
})

userSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
})

module.exports = mongoose.model("User", userSchema)

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CFactorSchema = new Schema({
  num: Number,
  numExp: Number,
  numUnit: String,
  numComp: String,
  denom: Number,
  denomExp: Number,
  denomUnit: String,
  denomComp: String,
  cfLabel: String,
})

mondule.exports = mongoose.model("CFactor", CFactorSchema)

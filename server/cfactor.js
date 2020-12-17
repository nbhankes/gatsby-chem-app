const mongoose = require("mongoose")
const Schema = mongoose.Schema
const cfSchema = new Schema(
  {
    num: {
      type: String,
      required: true,
    },
    numExp: {
      type: String,
      required: false,
    },
    numUnit: {
      type: String,
      required: true,
    },
    numComp: {
      type: String,
      required: false,
    },
    denom: {
      type: String,
      required: false,
    },
    denomExp: {
      type: String,
      required: false,
    },
    denomUnit: {
      type: String,
      required: false,
    },
    denomComp: {
      type: String,
      required: false,
    },
    cfLabel: {
      type: String,
      required: true,
    },
    cfLibrary: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)
var CFactors = mongoose.model("CFactor", cfSchema)

module.exports = { CFactors, cfSchema }

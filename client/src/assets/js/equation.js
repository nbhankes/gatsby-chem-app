items = [
  {
    cfLabel: "Nitrogen mass per mol",
    num: "14.007",
    numExp: "",
    numUnit: "grams",
    numComp: "Nitrogen",
    denom: "1",
    denomExp: "",
    denomUnit: "mol",
    denomComp: "Nitrogen",
  },
  {
    cfLabel: "milligrams per gram",
    num: "1000",
    numExp: "",
    numUnit: "milligrams",
    numComp: "",
    denom: "1",
    denomExp: "",
    denomUnit: "gram",
    denomComp: "",
  },
  {
    cfLabel: "grams of fertilizer per mols Nitrogen",
    num: "45",
    numExp: "22",
    numUnit: "milliliters",
    numComp: "fertilizer",
    denom: "2.4",
    denomExp: "",
    denomUnit: "mol",
    denomComp: "Nitrogen",
  },
]

//Conversion Factor Labels
const cfLabelArray = items.map(item => item.cfLabel)

//All numerators in an array
const numArray = items.map(item => item.num)

//All numerator exponents in an array
const numExpArray = items.map(item => item.numExp)

//All numerator exponents in an array with blank entries removed
const numExpArrayFiltered = numExpArray.filter(item => item.length > 0)

//All numerator units in an array
const numUnitArray = items.map(item => item.numUnit)

//All numerator components in an array
const numCompArray = items.map(item => item.numComp)

//All numerator components in an array with blanlk entries removed
const numCompArrayFiltered = numCompArray.filter(item => item.length > 0)

//All denominator values in an array
const denomArray = items.map(item => item.denom)

//All denominator exponent values in an array
const denomExpArray = items.map(item => item.denomExp)

//All denominator exponent values in an array with blank entries removed
const denomExpArrayFiltered = denomExpArray.filter(item => item.length > 0)

//All denominator units in an array
const denomUnitArray = items.map(item => item.denomUnit)

//All denominator components in an array
const denomCompArray = items.map(item => item.denomComp)

//All denominator components in an array with blank entries removed
const denomCompArrayFiltered = denomCompArray.filter(item => item.length > 0)

//Pairing the exponent value to its corresponding numerator value
const NumExpCount = numExpArrayFiltered.length

const hasExpValue = item => item > 0
const ExpIndex = numExpArray.findIndex(hasExpValue)

const product = numArray[ExpIndex] * Math.pow(10, numExpArray[ExpIndex])

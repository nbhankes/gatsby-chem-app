items = [
  {
    cfLabel: "Nitrogen mass per mol",
    num: "14.007",
    numExp: "1",
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
    numExp: "1",
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
    numExp: "1",
    numUnit: "milliliters",
    numComp: "fertilizer",
    denom: "2.4",
    denomExp: "",
    denomUnit: "mol",
    denomComp: "Nitrogen",
  },
]

const cfLabelArray = items.map(item => item.cfLabel)
const numArray = items.map(item => item.num)
const numExpArray = items.map(item => item.numExp)
const numUnitArray = items.map(item => item.numUnit)
const numCompArray = items.map(item => item.numComp)
const denomArray = items.map(item => item.denom)
const denomExpArray = items.map(item => item.denomExp)
const denomUnitArray = items.map(item => item.denomUnit)
const denomCompArray = items.map(item => item.denomComp)

var numAndNumExpArray = []

for (var i = 0; i < numArray.length; i++) {
  numAndNumExpArray = numArray[i] * numExpArray[i]
}

console.log(numAndNumExpArray)

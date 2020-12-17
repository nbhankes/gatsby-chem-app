//Conversion Factor Labels
const cfLabelArray = items.map(item => item.cfLabel)
console.log(cfLabelArray)

//Multiplying all numerator and numerator Exponent values together


  const reducer = (accumulator, currentValue) => accumulator * currentValue

  let numProduct = numArray.reduce(reducer)

  let numExpProduct = 1

  if (numExpArrayFiltered.length > 0) {
    numExpProduct = numExpArrayFilteredRaised.reduce(reducer)
  } else {
    numExpProduct = 1
  }

finalNumProduct = numProduct * numExpProduct


//Multiplying all Denominator and Denomonator Exponent values together


  const reducer = (accumulator, currentValue) => accumulator * currentValue
  const denomProduct = denomArray.reduce(reducer)

  let denomExpProduct = "1"

  if (denomExpArrayFiltered.length > 0) {
    denomExpProduct = denomExpArrayFilteredRaised.reduce(reducer)
  } else {
    denomExpProduct = 1
  }

  const finalDenomProduct = denomProduct * denomExpProduct

  return finalDenomProduct


const finalValue = finalNumProduct / finalDenomProduct


//Handling Units
denomUnitArray
const numUnitUniqueUnfiltered = numUnitArray
const denomUnitUniqueUnfiltered = denomUnitArray

for (var i = 0; i < numUnitUniqueUnfiltered.length; i++) {
  for (var j = denomUnitUniqueUnfiltered.length - 1; j > -1; j--) {
    if (numUnitUniqueUnfiltered[i] === denomUnitUniqueUnfiltered[j]) {
      denomUnitUniqueUnfiltered.splice(j, 1, "")
      numUnitUniqueUnfiltered.splice(i, 1, "")
    }
  }
}

let numUnitUnique = numUnitUniqueUnfiltered.filter(item => item.length > 0)

numUnitUnique

const two = "^2"
const three = "^3"

if (numUnitUnique.length === 1) {
  numUnitFinal = numUnitUnique
} else if (
  numUnitUnique.length === 2 &&
  numUnitUnique[0] === numUnitUnique[1]
) {
  numUnitFinal = numUnitUnique[0] + two
} else if (
  numUnitUnique.length === 3 &&
  numUnitUnique[0] === numUnitUnique[1] &&
  numUnitUnique[1] === numUnitUnique[2]
) {
  numUnitFinal = numUnitUnique[0] + three
}

let denomUnitUnique = denomUnitUniqueUnfiltered.filter(item => item.length > 0)

if (denomUnitUnique.length === 1) {
  denomUnitFinal = denomUnitUnique
} else if (
  denomUnitUnique.length === 2 &&
  denomUnitUnique[0] === denomUnitUnique[1]
) {
  denomUnitFinal = denomUnitUnique[0] + two
} else if (
  denomUnitUnique.length === 3 &&
  denomUnitUnique[0] === denomUnitUnique[1] &&
  denomUnitUnique[1] === denomUnitUnique[2]
) {
  denomUnitFinal = denomUnitUnique[0] + three
}

// Handling Components

const numCompUniqueUnfiltered = numCompArrayFiltered
const denomCompUniqueUnfiltered = denomCompArrayFiltered

for (var i = 0; i < numCompUniqueUnfiltered.length; i++) {
  for (var j = denomCompUniqueUnfiltered.length - 1; j > -1; j--) {
    if (numCompUniqueUnfiltered[i] === denomCompUniqueUnfiltered[j]) {
      denomCompUniqueUnfiltered.splice(j, 1, "")
      numCompUniqueUnfiltered.splice(i, 1, "")
    }
  }
}

numCompUnique = numCompUniqueUnfiltered.filter(
  val => !denomCompUniqueUnfiltered.includes(val)
)

if (numCompUnique.length === 1) {
  numCompFinal = numCompUnique
} else if (
  numCompUnique.length === 2 &&
  numCompUnique[0] === numCompUnique[1]
) {
  numCompFinal = numCompUnique[0] + two
} else if (
  numCompUnique.length === 3 &&
  numCompUnique[0] === numCompUnique[1] &&
  numCompUnique[1] === numCompUnique[2]
) {
  numCompFinal = numCompUnique[0] + three
}

denomCompUnique = denomCompUniqueUnfiltered.filter(
  val => !numCompUniqueUnfiltered.includes(val)
)

if (denomCompUnique.length === 1) {
  denomCompFinal = denomCompUnique
} else if (
  denomCompUnique.length === 2 &&
  denomCompUnique[0] === denomCompUnique[1]
) {
  denomCompFinal = denomCompUnique[0] + two
} else if (
  denomCompUnique.length === 3 &&
  denomCompUnique[0] === denomCompUnique[1] &&
  denomCompUnique[1] === denomCompUnique[2]
) {
  denomCompFinal = denomCompUnique[0] + three
}

finalNumProduct +
  numUnitFinal +
  numCompFinal +
  "per" +
  denomUnitFinal +
  denomCompFinal

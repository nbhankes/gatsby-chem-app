import React from "react"
import CalcContainerDropTarget from "../CalcContainer/CalcContainerDropTarget"
import "./calcContainer.css"

//! card formatting comes from cfCard.css

export default function CalcContainer(props) {
  const [items, setItems] = React.useState([])

  const itemDropped = item => setItems([...items, item])

  let numArrayInit = [1]
  let numExpArrayInit = [""]

  //?All numerators in an array
  let numArray = [...numArrayInit, ...items.map(item => item.num)]

  //?All numerator exponents in an array
  let numExpArray = [...numExpArrayInit, ...items.map(item => item.numExp)]

  //?All numerator exponents in an array with blank entries removed
  let numExpArrayFiltered = numExpArray.filter(item => item.length > 0)

  let numExpArrayFilteredRaised = [""]

  if (numExpArrayFiltered.length > 0) {
    numExpArrayFilteredRaised = numExpArrayFiltered.map(item =>
      Math.pow(10, item)
    )
  } else {
    numExpArrayFilteredRaised = [1]
  }

  //?All numerator units in an array
  const numUnitArray = items.map(item => item.numUnit)

  //?All numerator components in an array
  const numCompArray = items.map(item => item.numComp)

  //?All numerator components in an array with blank entries removed
  const numCompArrayFiltered = numCompArray.filter(item => item.length > 0)

  //?Setting up to work with the denominator numbers
  let denomArrayInit = [1]
  let denomExpArrayInit = [""]

  //?All denominator values in an array
  const denomArray = [...denomArrayInit, ...items.map(item => item.denom)]

  //?All numerator components in an array with blank entries removed
  const denomArrayFiltered = denomArray.filter(item => item.length > 0)

  //?All denominator exponent values in an array
  const denomExpArray = [
    ...denomExpArrayInit,
    ...items.map(item => item.denomExp),
  ]

  //?All denominator exponent values in an array with blank entries removed
  const denomExpArrayFiltered = denomExpArray.filter(item => item.length > 0)

  //?All filtered denominator exponents in an array and multiplied to E ^ Exp
  const denomExpArrayFilteredRaised = denomExpArrayFiltered.map(item =>
    Math.pow(10, item)
  )

  //?All denominator units in an array
  const denomUnitArray = items.map(item => item.denomUnit)

  //?Removes all empty values from denom units array
  const denomUnitArrayFiltered = denomUnitArray.filter(item => item.length > 0)

  //?All denominator components in an array
  const denomCompArray = items.map(item => item.denomComp)

  //?All denominator components in an array with blank entries removed
  const denomCompArrayFiltered = denomCompArray.filter(item => item.length > 0)

  //?Multiplying all numerator and numerator Exponent values together
  //?This yields the final numerator product, whcih will be used to
  //?calculate the final value
  const reducer = (accumulator, currentValue) => accumulator * currentValue

  let numProduct = numArray.reduce(reducer)

  let numExpProduct = 1

  if (numExpArrayFiltered.length > 0) {
    numExpProduct = numExpArrayFilteredRaised.reduce(reducer)
  } else {
    numExpProduct = 1
  }

  const finalNumProduct = numProduct * numExpProduct

  //?Multiplying all denominator and denominator exponent values together
  //?This yields the final numerator product, whcih will be used to
  //?calculate the final value
  let denomProduct

  if (denomArrayFiltered.length > 0) {
    denomProduct = denomArrayFiltered.reduce(reducer)
  } else {
    denomProduct = 1
  }

  let denomExpProduct = 1

  if (denomExpArrayFiltered.length > 0) {
    denomExpProduct = denomExpArrayFilteredRaised.reduce(reducer)
  } else {
    denomExpProduct = 1
  }

  const finalDenomProduct = denomProduct * denomExpProduct

  //!Final calculated value
  //let n = 2

  const [sigFig, setSigFigState] = React.useState(2)

  let finalValueBeforeSigFig = finalNumProduct / finalDenomProduct

  console.log("Final Value is:" + typeof finalValueBeforeSigFig)

  let finalValue

  if (finalValueBeforeSigFig < 9999) {
    finalValue = Number.parseFloat(finalValueBeforeSigFig)
      .toFixed(sigFig)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
  } else if (finalValueBeforeSigFig > 9999) {
    finalValue = finalValueBeforeSigFig.toExponential(sigFig)
  }

  //?Handling Units Finds Values unique to numerator and then
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

  const two = "^2"
  const three = "^3"

  let numUnitFinal

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
  } else {
    numUnitFinal = ""
  }

  let denomUnitUnique = denomUnitUniqueUnfiltered.filter(
    item => item.length > 0
  )

  let denomUnitFinal

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
  } else {
    denomUnitFinal = ""
  }

  //? Handling Components
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

  const numCompUnique = numCompUniqueUnfiltered.filter(
    val => !denomCompUniqueUnfiltered.includes(val)
  )

  let numCompFinal

  if (numCompUnique.length === 1) {
    numCompFinal = numCompUnique
  } else if (
    numCompUnique.length === 2 &&
    numCompUnique[0] === numCompUnique[1]
  ) {
    numCompFinal = numCompUnique[0]
  } else if (
    numCompUnique.length === 3 &&
    numCompUnique[0] === numCompUnique[1] &&
    numCompUnique[1] === numCompUnique[2]
  ) {
    numCompFinal = numCompUnique[0]
  } else {
    numCompFinal = ""
  }

  const denomCompUnique = denomCompUniqueUnfiltered.filter(
    val => !numCompUniqueUnfiltered.includes(val)
  )

  let denomCompFinal

  if (denomCompUnique.length === 1) {
    denomCompFinal = denomCompUnique
  } else if (
    denomCompUnique.length === 2 &&
    denomCompUnique[0] === denomCompUnique[1]
  ) {
    denomCompFinal = denomCompUnique[0]
  } else if (
    denomCompUnique.length === 3 &&
    denomCompUnique[0] === denomCompUnique[1] &&
    denomCompUnique[1] === denomCompUnique[2]
  ) {
    denomCompFinal = denomCompUnique[0]
  } else {
    denomCompFinal = ""
  }

  let output

  if (numArray.length === 1 && numExpArray.length === 1) {
    output = "Drag and drop to begin."
  } else if (numArray.length > 1 && denomUnitFinal === "") {
    output = finalValue + " " + numUnitFinal + " " + numCompFinal
  } else {
    output =
      finalValue +
      " " +
      numUnitFinal +
      " " +
      numCompFinal +
      " per " +
      denomUnitFinal +
      " " +
      denomCompFinal
  }

  return (
    <div>
      <CalcContainerDropTarget
        onItemDropped={itemDropped}
        dropEffect="copyLink"
      >
        <div className="drag-drop-container">
          {items.map(item => (
            <div className="cfactor-grid-container-drop-target" key={item.id}>
              <div className="num-card">{item.num}</div>
              <div className="num-E-card">e</div>
              <div className="num-exp-card">{item.numExp} </div>
              <div className="num-unit-card">{item.numUnit} </div>
              <div className="num-comp-card">{item.numComp} </div>
              <div className="division-card"> </div>
              <div className="denom-card">{item.denom} </div>
              <div className="denom-E-card">e</div>
              <div className="denom-exp-card">{item.denomExp} </div>
              <div className="denom-unit-card">{item.denomUnit} </div>
              <div className="denom-comp-card">{item.denomComp} </div>
            </div>
          ))}
        </div>
      </CalcContainerDropTarget>
      <div className="ouput-and-sig-fig-container">
        <div className="sig-fig-input-with-label-container">
          <div className="sig-fig-label-text">Sig Figs:</div>
          <input
            className="sig-fig-input"
            type="number"
            placeholder="3"
            onChange={event => setSigFigState(event.target.value)}
            min="0"
          ></input>
        </div>
        <output className="calc-output">{output}</output>
      </div>
    </div>
  )
}

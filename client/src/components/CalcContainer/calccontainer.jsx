import React from "react"
import CalcContainerDropTarget from "../CalcContainer/CalcContainerDropTarget"
import "./calcContainer.css"

{
  /* card formatting comes from cfCard.css */
}

export default function CalcContainer(props) {
  const [items, setItems] = React.useState([])

  const itemDropped = item => setItems([...items, item])

  const numArrayInit = [1]
  const numExpArrayInit = [""]

  //All numerators in an array
  const numArray = [...numArrayInit, items.map(item => item.num)]
  console.log("numArray:" + numArray)
  //All numerator exponents in an array
  const numExpArray = [...numExpArrayInit, items.map(item => item.numExp)]
  console.log("numExpArray" + numExpArray)
  //All numerator exponents in an array with blank entries removed

  //numExpArrayFiltered .filter method is not filtering all blank values, producing NaN
  //numExpArrayFiltered .filter method is not filtering all blank values, producing NaN
  //numExpArrayFiltered .filter method is not filtering all blank values, producing NaN
  //numExpArrayFiltered .filter method is not filtering all blank values, producing NaN
  //numExpArrayFiltered .filter method is not filtering all blank values, producing NaN
  const numExpArrayFiltered = numExpArray.filter(item => (item = Boolean))

  console.log("numExpArrayFiltered" + numExpArrayFiltered)

  let numExpArrayFilteredRaised = [""]

  if (numExpArrayFiltered.length > 0) {
    numExpArrayFilteredRaised = numExpArrayFiltered.map(item =>
      Math.pow(10, item)
    )
  } else {
    numExpArrayFilteredRaised = [1]
  }

  console.log("numExpArrayFilteredRaised" + numExpArrayFilteredRaised)
  //Multiplying all numerator and numerator Exponent values together
  const reducer = (accumulator, currentValue) => accumulator * currentValue

  //reduce producing NaN
  //reduce producing NaN
  //reduce producing NaN
  //reduce producing NaN
  //reduce producing NaN
  let numProduct = numArray.reduce(reducer)

  let numExpProduct

  if (numExpArrayFiltered.length > 0) {
    numExpProduct = numExpArrayFilteredRaised.reduce(reducer)
  } else {
    numExpProduct = 1
  }
  console.log("numProduct" + numProduct)
  console.log("numExpProduct" + numExpProduct)
  let finalNumProduct = numProduct * numExpProduct
  console.log("finalNumProduct" + finalNumProduct)

  //All numerator units in an array
  const numUnitArray = items.map(item => item.numUnit)
  console.log(numUnitArray)

  //All numerator components in an array
  const numCompArray = items.map(item => item.numComp)

  //All numerator components in an array with blank entries removed
  const numCompArrayFiltered = numCompArray.filter(item => item.length > 0)
  console.log(numCompArrayFiltered)

  //All denominator values in an array
  const denomArray = items.map(item => item.denom)
  console.log(denomArray)

  //All denominator exponent values in an array
  const denomExpArray = items.map(item => item.denomExp)

  //All denominator exponent values in an array with blank entries removed
  const denomExpArrayFiltered = denomExpArray.filter(item => item.length > 0)

  //All filtered denominator exponents in an array and multiplied to E ^ Exp
  const denomExpArrayFilteredRaised = denomExpArrayFiltered.map(item =>
    Math.pow(10, item)
  )
  console.log(denomExpArrayFilteredRaised)

  //All denominator units in an array
  const denomUnitArray = items.map(item => item.denomUnit)
  console.log(denomUnitArray)
  //All denominator components in an array
  const denomCompArray = items.map(item => item.denomComp)

  //All denominator components in an array with blank entries removed
  const denomCompArrayFiltered = denomCompArray.filter(item => item.length > 0)
  console.log(denomCompArrayFiltered)

  //const numValue = items.map(item => item.num)

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
      <output className="calc-output">{finalNumProduct}</output>
    </div>
  )
}

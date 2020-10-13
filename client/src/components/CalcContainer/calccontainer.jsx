import React from "react"
import CalcContainerDropTarget from "../CalcContainer/CalcContainerDropTarget"
import "./calcContainer.css"

{
  /* card formatting comes from cfCard.css */
}

export default function CalcContainer(props) {
  const [items, setItems] = React.useState([])

  const itemDropped = item => setItems([...items, item])

  const numberCalc = numArr == undefined ? 1 : numArr.reduce((a, b) => a * b)

  const numArr = items.map(item => item.num)

  const numExpArr = items.map(item => item.numExp)

  const numUnitArr = items.map(item => item.numUnit)

  const numCompArr = items.map(item => item.numComp)

  const denomArr = items.map(item => item.denom)

  const denomExpArr = items.map(item => item.denomExp)

  const denomUnitArr = items.map(item => item.denomUnit)

  const denomCompArr = items.map(item => item.denomComp)

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
      <output className="calc-output">
        {numberCalc +
          " " +
          numArr +
          " " +
          numExpArr +
          " " +
          numUnitArr +
          " " +
          numCompArr +
          " " +
          denomArr +
          " " +
          denomExpArr +
          " " +
          denomUnitArr +
          " " +
          denomCompArr}
      </output>
    </div>
  )
}

import React from "react"
import CalcContainerDropTarget from "../CalcContainer/CalcContainerDropTarget"
import "./calcContainer.css"
{
  /* card formatting comes from cfCard.css */
}

export default function CalcContainer(props) {
  const [items, setItems] = React.useState([])

  const itemDropped = item => setItems([...items, item])
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
    </div>
  )
}

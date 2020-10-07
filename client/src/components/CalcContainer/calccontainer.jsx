import React from "react"
import CalcContainerDropTarget from "../CalcContainer/CalcContainerDropTarget"
import "./calcContainer.css"

const cfacContainer = {
  display: "grid",
  margin: "0.5rem 0.1rem",
  background: "white",
  gridTemplateColumns: "2fr 1fr 1fr",
  gridTemplateRows: "1fr",
  gridTemplateAreas: `
       'num numE numExp'
       'numUnit numUnit numUnit'
       'numComp numComp numComp'
       'div div div'
       'denom denomE denomExp'
       'denomUnit denomUnit denomUnit'
       'denomComp denomComp denomComp'
       `,
  padding: "0rem 0rem",
  background: "white",
  boxShadow: "2px 2px 5px #878282",
  width: "auto",
  maxWidth: "8rem",
  height: "auto",
  margin: "1rem .25rem",
}

const num = {
  gridArea: "num",
  margin: "auto auto",
}

const numE = {
  gridArea: "numE",
  margin: "auto auto",
}

const numExp = {
  gridArea: "numExp",
  margin: "auto auto",
}

const numUnit = {
  gridArea: "numUnit",
  margin: "auto auto",
}

const numComp = {
  gridArea: "numComp",
  margin: "auto auto",
}

const division = {
  height: "0.1rem",
  backgroundColor: "black",
  width: "100%",
  gridArea: "div",
}

const denom = {
  gridArea: "denom",
  margin: "auto auto",
}

const denomE = {
  gridArea: "denomE",
  margin: "auto auto",
}

const denomExp = {
  gridArea: "denomExp",
  margin: "auto auto",
}

const denomUnit = {
  gridArea: "denomUnit",
  margin: "auto auto",
}

const denomComp = {
  gridArea: "denomComp",
  margin: "auto auto",
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
            <div style={cfacContainer} key={item.id}>
              <div>{item.cflabel}</div>
              <div style={num}>{item.num} </div>
              <div style={numE}>e</div>
              <div style={numExp}>{item.numExp} </div>
              <div style={numUnit}>{item.numUnit} </div>
              <div style={numComp}>{item.numComp} </div>
              <div style={division}></div>
              <div style={denom}>{item.denom} </div>
              <div style={denomE}>e</div>
              <div style={denomExp}>{item.denomExp} </div>
              <div style={denomUnit}>{item.denomUnit} </div>
              <div style={denomComp}>{item.denomComp} </div>
            </div>
          ))}
        </div>
      </CalcContainerDropTarget>
    </div>
  )
}

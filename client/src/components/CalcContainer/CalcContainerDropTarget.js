import React from "react"
import PropTypes from "prop-types"
import * as dropEffects from "../dropEffects"
import "./calcContainer.css"

const insideStyle = {
  backgroundColor: "lightgray",
}

const dropStyle = {
  margin: "0 0",
}

const CalcContainerDropTarget = props => {
  const [isOver, setIsOver] = React.useState(false)

  const dragOver = ev => {
    ev.preventDefault()
    ev.dataTransfer.dropEffect = props.dropEffect
  }

  const drop = ev => {
    const droppedItem = JSON.parse(ev.dataTransfer.getData("drag-item"))
    if (droppedItem) {
      props.onItemDropped(droppedItem)
    }
    setIsOver(false)
  }

  const dragEnter = ev => {
    ev.dataTransfer.dropEffect = props.dropEffect
    setIsOver(true)
  }

  const dragLeave = () => setIsOver(false)

  return (
    <div
      onDragOver={dragOver}
      onDrop={drop}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      style={{
        width: "100%",
        height: "100%",
        ...(isOver ? insideStyle : dropStyle),
      }}
    >
      {props.children}
    </div>
  )
}

CalcContainerDropTarget.propTypes = {
  onItemDropped: PropTypes.string,
  dropEffect: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

CalcContainerDropTarget.defaultProps = {
  dropEffect: dropEffects.All,
}

export default CalcContainerDropTarget

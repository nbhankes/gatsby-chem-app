import React from "react"
import PropTypes from "prop-types"
import * as dropEffects from "../dropEffects"

const draggingStyle = {
  opacity: 0.25,
}

const CFCardDrag = props => {
  const [isDragging, setIsDragging] = React.useState(false)

  const startDrag = ev => {
    setIsDragging(true)
    ev.dataTransfer.setData("drag-item", JSON.stringify(props.dataItem))
    ev.dataTransfer.effectAllowed = props.dropEffect
  }

  const dragEnd = () => setIsDragging(false)

  const cfCardContainerStyle = {
    padding: "0rem 0rem",
    background: "white",
    boxShadow: "2px 2px 5px #878282",
    width: "auto",
    maxWidth: "8rem",
    height: "auto",
    margin: "1rem .25rem",
  }

  return (
    <div
      role="region"
      style={(isDragging ? draggingStyle : {}, cfCardContainerStyle)}
      draggable
      onDragStart={startDrag}
      onDragEnd={dragEnd}
    >
      {props.children}
    </div>
  )
}

CFCardDrag.propTypes = {
  dataItem: PropTypes.string.isRequired,
  dragImage: PropTypes.string,
  dropEffect: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

CFCardDrag.defaultProps = {
  dropEffect: dropEffects.All,
}

export default CFCardDrag

import React from "react"

import "./nav.css"

export default function nav() {
  function showHideForm() {
    var x = document.getElementById("form-component")
    if (x.style.display === "none") {
      x.style.display = "block"
    } else {
      x.style.display = "none"
    }
  }

  return (
    <div className="nav-banner">
      <div className="nav-button" onClick={showHideForm}>
        Add Conversion Factor
      </div>
      <div className="nav-button">Lab Book</div>
    </div>
  )
}

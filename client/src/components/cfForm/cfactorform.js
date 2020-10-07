import React, { useState } from "react"
import { useMutation } from "@apollo/client"
import { CREATE_CFACTOR } from "../../apiCalls/mutations"
import { GET_CFACTOR } from "../../apiCalls/queries"
import { css } from "emotion"

const initialFormData = {
  num: "",
  numExp: "",
  numUnit: "",
  numComp: "",
  denom: "",
  denomExp: "",
  denomUnit: "",
  denomComp: "",
  cfLabel: "",
  cfLibrary: "",
  setcfLabel: "",
}
function CFactorForm() {
  const [formData, setFormData] = useState(initialFormData)
  const [CreateCFactor, { error }] = useMutation(CREATE_CFACTOR, {
    refetchQueries: [{ query: GET_CFACTOR }],
  })
  if (error) {
    console.log("@apollo/client useMutation hook failure: ", error)
  }
  const gridContainerStyle = {
    display: "grid",
    width: "20rem",
    margin: "0rem 2rem",
    backgroundColor: "white",
    gridTemplateColumns: "2fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr auto 1fr 1fr 1fr 1fr",
    gridTemplateAreas: `
     'cfLab cfLab cfLab'
     'num numE numExp'
     'numUnit numUnit numUnit'
     'numComp numComp numComp'
     'div div div'
     'denom denomE denomExp'
     'denomUnit denomUnit denomUnit'
     'denomComp denomComp denomComp'
     'cfLib cfLib cfLib'
     'sub sub sub'
     `,
  }
  const cfLab = {
    width: "auto",
    minHeight: "2rem",
    gridArea: "cfLab",
    background: "#e5e5e5ff",
    border: "solid 0.01rem grey",
    marginBottom: "0.1rem",
  }
  const numer = {
    maxWidth: "8rem",
    minHeight: "2rem",
    gridArea: "num",
    margin: "0.1rem auto",
    textAlign: "center",
  }
  const numE = {
    gridArea: "numE",
    margin: "auto auto",
    fontSize: "2rem",
  }
  const numExpo = {
    maxWidth: "8rem",
    minHeight: "2rem",
    gridArea: "numExp",
    margin: "0.1rem auto",
    textAlign: "center",
  }
  const numerUnit = {
    width: "auto",
    minHeight: "2rem",
    gridArea: "numUnit",
    textAlign: "center",
    marginBottom: "0.1rem",
  }
  const numerComp = {
    width: "auto",
    minHeight: "2rem",
    gridArea: "numComp",
    textAlign: "center",
  }
  const division = {
    height: "0.2rem",
    backgroundColor: "#14213dff",
    width: "100%",
    gridArea: "div",
  }
  const denomo = {
    maxWidth: "8rem",
    minHeight: "2rem",
    gridArea: "denom",
    margin: "auto auto",
    textAlign: "center",
  }
  const denomoE = {
    gridArea: "denomE",
    margin: "auto auto",
    fontSize: "2rem",
  }
  const denomoExpo = {
    maxWidth: "8rem",
    minHeight: "2rem",
    gridArea: "denomExp",
    margin: "auto auto",
    textAlign: "center",
  }
  const denomoUnit = {
    width: "auto",
    minHeight: "2rem",
    gridArea: "denomUnit",
    textAlign: "center",
    marginBottom: "0.1rem",
  }
  const denomoComp = {
    width: "auto",
    minHeight: "2rem",
    gridArea: "denomComp",
    textAlign: "center",
    marginBottom: "0.1rem",
  }
  const cfLib = {
    width: "auto",
    minHeight: "2rem",
    gridArea: "cfLib",
    background: "#e5e5e5ff",
    border: "solid 0.01rem grey",
    marginBottom: "0.1rem",
  }

  const styles = {
    button: {
      width: "auto",
      minHeight: "3rem",
      gridArea: "sub",
      backgroundImage: "linear-gradient(to right, #fca311ff, #e5e5e5ff)",
      color: "white",
      fontFamily: "sans-serif",
      fontSize: "1.5rem",
      border: "none",

      "&:hover": {
        border: "3px solid",
        borderImage: "linear-gradient(to right, #000000ff, #14213dff)",
        borderImageSlice: "1",
      },
    },
  }

  const handleChange = e => {
    e.preventDefault()
    const {
      target: { name, value },
    } = e
    setFormData({ ...formData, [name]: value })
  }
  return (
    <div>
      <form
        id="cfactorForm"
        onSubmit={event => {
          event.preventDefault()
          CreateCFactor({
            variables: {
              ...formData,
            },
          })
            .then(data => console.log(data))
            .catch(error => console.log(error))
          // Reloads page and updates changes/clears form
          //window.location.reload()
        }}
      >
        <div style={gridContainerStyle} className="gridContainer">
          <input
            type="text"
            name="cfLabel"
            id="cfLabel"
            value={formData.cfLabel}
            // value={cfLabel}
            style={cfLab}
            className="cfLabel"
            aria-label="This is the title of your conversion factor, example: Nitrogen Content of calcium nitrate"
            placeholder="Label: Nitrogen mol/grams"
            required
            onChange={handleChange}
            // onChange={event => setcfLabel(event.target.value)}
          />
          <input
            type="text"
            id="num"
            // value={num}
            value={formData.num}
            style={numer}
            step="any"
            name="num"
            className="num"
            placeholder="6.023"
            aria-label="Conversion Factor Numerator Value, a number"
            required
            // onChange={event => setNum(event.target.value)}
            onChange={handleChange}
          />
          <div className="wordOne" style={numE}>
            e
          </div>
          <input
            type="text"
            name="numExp"
            id="numExp"
            value={formData.numExp}
            // value={numExp}
            style={numExpo}
            className="numExp"
            aria-label="Conversion Factor Numerator Exponent, ten to the power of this input value"
            placeholder="23"
            // onChange={event => setNumExp(event.target.value)}
            onChange={handleChange}
          />
          <input
            type="text"
            name="numUnit"
            id="numUnit"
            // value={numUnit}
            value={formData.numUnit}
            style={numerUnit}
            className="numUnit"
            aria-label="Conversion Factor Numerator Units, example: grams"
            placeholder="atoms"
            required
            // onChange={event => setNumUnit(event.target.value)}
            onChange={handleChange}
          />
          <input
            type="text"
            name="numComp"
            id="numComp"
            // value={numComp}
            value={formData.numComp}
            style={numerComp}
            className="numComp"
            aria-label="Conversion Factor Numerator Compound, example: Nitrogen"
            placeholder="Nitrogen"
            required
            // onChange={event => setNumComp(event.target.value)}
            onChange={handleChange}
          />
          <div style={division} className="break"></div>
          <input
            type="text"
            step="any"
            name="denom"
            id="denom"
            // value={denom}
            value={formData.denom}
            style={denomo}
            className="denom"
            aria-label="Conversion Factor Denomenator value, a number"
            placeholder="14.0067"
            required
            // onChange={event => setDenom(event.target.value)}
            onChange={handleChange}
          />
          <div className="wordTwo" style={denomoE}>
            e
          </div>
          <input
            type="text"
            name="denomExp"
            id="denomExp"
            value={formData.denomExp}
            // value={denomExp}
            style={denomoExpo}
            className="denomExp"
            aria-label="Conversion Factor Denomenator Exponent, ten to the power of this input value"
            placeholder=""
            // onChange={event => setDenomExp(event.target.value)}
            onChange={handleChange}
          />
          <input
            type="text"
            name="denomUnit"
            id="denomUnit"
            value={formData.denomUnit}
            // value={denomUnit}
            style={denomoUnit}
            className="denomUnit"
            aria-label="Conversion Factor Denomenator Units, example: grams"
            placeholder="grams"
            required
            // onChange={event => setDenomUnit(event.target.value)}
            onChange={handleChange}
          />
          <input
            type="text"
            name="denomComp"
            id="denomComp"
            value={formData.denomComp}
            // value={denomComp}
            style={denomoComp}
            className="denomComp"
            aria-label="Conversion Factor Denomenator Compound, example: Nitrogen"
            placeholder="Nitrogen"
            required
            onChange={handleChange}
            // onChange={event => setDenomComp(event.target.value)}
          />
          <input
            type="text"
            name="cfLibrary"
            id="cfLibrary"
            value={formData.cfLibrary}
            // value={cfLibrary}
            style={cfLib}
            className="cfLibrary"
            aria-label="This is the title of your conversion factor, example: Nitrogen Content of calcium nitrate"
            placeholder="Save To: Summer 2020 Fertilizer Trial"
            required
            // onChange={event => setcfLibrary(event.target.value)}
            onChange={handleChange}
          />
          <button type="submit" className={css(styles.button)}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
export default CFactorForm

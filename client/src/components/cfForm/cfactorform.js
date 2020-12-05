import React, { useState } from "react"
import { useMutation } from "@apollo/client"
import { CREATE_CFACTOR } from "../../apiCalls/mutations"
import { GET_CFACTOR } from "../../apiCalls/queries"
import "./cfactorform.css"

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

  const handleChange = e => {
    e.preventDefault()
    const {
      target: { name, value },
    } = e
    setFormData({ ...formData, [name]: value })
  }
  return (
    <div id="form-component">
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
        <div className="grid-container">
          <input
            type="text"
            name="cfLabel"
            id="cfLabel"
            value={formData.cfLabel}
            // value={cfLabel}
            className="cf-label"
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
            step="any"
            name="num"
            className="num"
            placeholder="6.023"
            aria-label="Conversion Factor Numerator Value, a number"
            required
            // onChange={event => setNum(event.target.value)}
            onChange={handleChange}
          />
          <div className="word-one">e</div>
          <input
            type="text"
            name="numExp"
            id="numExp"
            value={formData.numExp}
            // value={numExp}
            className="num-exp"
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
            className="num-unit"
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
            className="num-comp"
            aria-label="Conversion Factor Numerator Compound, example: Nitrogen"
            placeholder="Nitrogen"
            // onChange={event => setNumComp(event.target.value)}
            onChange={handleChange}
          />
          <div className="division"></div>
          <input
            type="text"
            step="any"
            name="denom"
            id="denom"
            // value={denom}
            value={formData.denom}
            className="denom"
            aria-label="Conversion Factor Denomenator value, a number"
            placeholder="14.0067"
            // onChange={event => setDenom(event.target.value)}
            onChange={handleChange}
          />
          <div className="word-two">e</div>
          <input
            type="text"
            name="denomExp"
            id="denomExp"
            value={formData.denomExp}
            // value={denomExp}
            className="denom-exp"
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
            className="denom-unit"
            aria-label="Conversion Factor Denomenator Units, example: grams"
            placeholder="grams"
            // onChange={event => setDenomUnit(event.target.value)}
            onChange={handleChange}
          />
          <input
            type="text"
            name="denomComp"
            id="denomComp"
            value={formData.denomComp}
            // value={denomComp}
            className="denom-comp"
            aria-label="Conversion Factor Denomenator Compound, example: Nitrogen"
            placeholder="Nitrogen"
            onChange={handleChange}
            // onChange={event => setDenomComp(event.target.value)}
          />
          <input
            type="text"
            name="cfLibrary"
            id="cfLibrary"
            value={formData.cfLibrary}
            // value={cfLibrary}
            className="cf-lib"
            aria-label="This is the title of your conversion factor, example: Nitrogen Content of calcium nitrate"
            placeholder="Save To: Summer 2020 Fertilizer Trial"
            required
            // onChange={event => setcfLibrary(event.target.value)}
            onChange={handleChange}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
export default CFactorForm

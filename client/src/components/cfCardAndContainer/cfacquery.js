import React from "react"
import { useQuery, useMutation } from "@apollo/client"
import { GET_CFACTOR } from "../../apiCalls/queries"
import { DELETE_CFACTOR, REVERSE_CFACTOR } from "../../apiCalls/mutations"

import { FaSyncAlt, FaRegTrashAlt } from "react-icons/fa"
import { css } from "emotion"
import "./cfCard.css"

import CFCardDrag from "./cfCardDrag"

function CFacQuery() {
  const styles = {
    button: {
      height: "3rem",
      width: "4rem",
      background: "hsla(94, 38%, 59%, 1)",
      color: "black",
      fontSize: "1.25rem",
      border: "none",

      "&:hover": {
        background: "green",
      },
    },
  }

  const { loading, error, data } = useQuery(GET_CFACTOR)

  const [deleteCFactor] = useMutation(DELETE_CFACTOR, {
    refetchQueries: [{ query: GET_CFACTOR }],
  })

  const [reverseCFactor] = useMutation(REVERSE_CFACTOR, {
    refetchQueries: [{ query: GET_CFACTOR }],
  })

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  return (
    <>
      <div className="cfactor-list-container-label">My Conversion Factors</div>

      <div className="individual-cfactor-container">
        {data.getCFactors.map(cfactor => (
          <CFCardDrag
            key={cfactor.id}
            dataItem={cfactor}
            dropEffect="link"
            id={cfactor.id}
          >
            <div className="cf-label-card">{cfactor.cfLabel}</div>
            <div className="cfactor-grid-container">
              <div className="num-card">{cfactor.num}</div>
              <div className="num-E-card">e</div>
              <div className="num-exp-card">{cfactor.numExp}</div>
              <div className="num-unit-card">{cfactor.numUnit}</div>
              <div className="num-comp-card">{cfactor.numComp}</div>
              <div className="division-card"></div>
              <div className="denom-card">{cfactor.denom}</div>
              <div className="denom-E-card">e</div>
              <div className="denom-exp-card">{cfactor.denomExp}</div>
              <div className="denom-unit-card">{cfactor.denomUnit}</div>
              <div className="denom-comp-card">{cfactor.denomComp}</div>
            </div>
            <div className="cfactor-button-container">
              <button
                className="cfactor-card-button"
                onClick={() => {
                  deleteCFactor({
                    variables: { id: cfactor.id },
                  })
                }}
              >
                <FaRegTrashAlt />
              </button>

              <button
                className="cfactor-card-button"
                onClick={() => {
                  reverseCFactor({
                    variables: { id: cfactor.id },
                  })
                }}
              >
                <FaSyncAlt />
              </button>
            </div>
          </CFCardDrag>
        ))}
      </div>
    </>
  )
}

export default CFacQuery

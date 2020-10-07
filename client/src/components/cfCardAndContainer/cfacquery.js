import React from "react"
import { useQuery, useMutation } from "@apollo/client"
import { GET_CFACTOR } from "../../apiCalls/queries"
import { DELETE_CFACTOR, REVERSE_CFACTOR } from "../../apiCalls/mutations"

import { FaSyncAlt, FaRegTrashAlt } from "react-icons/fa"
import { css } from "emotion"

import CFCardDrag from "./cfCardDrag"

function CFacQuery() {
  const cfactorContainerLabel = {
    display: "Flex",
    fontSize: "1.3rem",
    fontFamily: "sans-serif",
    color: "white",
    padding: "0.5rem 0.5rem",
    flexWrap: "wrap",
    alignItems: "stretch",
    background: "hsla(198, 61%, 39%, 1)",
  }

  const cfactorContainer = {
    display: "Flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "stretch",
    background: "hsla(208, 25%, 45%, .5)",
    margin: "0 0",
  }

  /*{
   const cfCardContainerStyle = {
      padding: "0rem 0rem",
       background: "blue",
    boxShadow: "2px 2px 5px #878282",
    width: "auto",
    maxWidth: "8rem",
    height: "auto",
    margin: "1rem .25rem",
    }
  }*/

  const cfacContainer = {
    display: "grid",
    margin: "0.5rem 0.1rem",
    backgroundColor: "white",
    gridTemplateColumns: "2fr 1fr 1fr",
    gridTemplateRows: "1fr",
    gridTemplateAreas: `
        'cfLab cfLab cfLab'
         'num numE numExp'
         'numUnit numUnit numUnit'
         'numComp numComp numComp'
         'div div div'
         'denom denomE denomExp'
         'denomUnit denomUnit denomUnit'
         'denomComp denomComp denomComp'
         `,
  }

  const cfLab = {
    background: "#14213dff",
    color: "white",
    textAlign: "center",
    width: "100%",
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
      <div style={cfactorContainerLabel}>Summer 2020 Fertilizer Trial</div>

      <div style={cfactorContainer}>
        {data.getCFactors.map(cfactor => (
          <CFCardDrag
            key={cfactor.id}
            dataItem={cfactor}
            dropEffect="link"
            id={cfactor.id}
          >
            <div style={cfLab}>{cfactor.cfLabel}</div>
            <div style={cfacContainer}>
              <div style={num}>{cfactor.num}</div>
              <div style={numE}>e</div>
              <div style={numExp}>{cfactor.numExp}</div>
              <div style={numUnit}>{cfactor.numUnit}</div>
              <div style={numComp}>{cfactor.numComp}</div>
              <div style={division}></div>
              <div style={denom}>{cfactor.denom}</div>
              <div style={denomE}>e</div>
              <div style={denomExp}>{cfactor.denomExp}</div>
              <div style={denomUnit}>{cfactor.denomUnit}</div>
              <div style={denomComp}>{cfactor.denomComp}</div>
            </div>
            <div>
              <button
                className={css(styles.button)}
                onClick={() => {
                  deleteCFactor({
                    variables: { id: cfactor.id },
                  })
                }}
              >
                <FaRegTrashAlt />
              </button>

              <button
                className={css(styles.button)}
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

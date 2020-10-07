import gql from "graphql-tag"

const GET_CFACTOR = gql`
  query getCFactors {
    getCFactors {
      id
      cfLabel
      num
      numExp
      numUnit
      numComp
      denom
      denomExp
      denomUnit
      denomComp
    }
  }
`

export { GET_CFACTOR }

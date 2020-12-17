import gql from "graphql-tag"

const CREATE_CFACTOR = gql`
  mutation CreateCFactor(
    $num: String!
    $numExp: String
    $numUnit: String!
    $numComp: String!
    $denom: String!
    $denomExp: String
    $denomUnit: String!
    $denomComp: String!
    $cfLabel: String!
    $cfLibrary: String
  ) {
    createCFactor(
      num: $num
      numExp: $numExp
      numUnit: $numUnit
      numComp: $numComp
      denom: $denom
      denomExp: $denomExp
      denomUnit: $denomUnit
      denomComp: $denomComp
      cfLabel: $cfLabel
      cfLibrary: $cfLibrary
    ) {
      num
      numExp
      numUnit
      numComp
      denom
      denomExp
      denomUnit
      denomComp
      cfLabel
      cfLibrary
    }
  }
`

const DELETE_CFACTOR = gql`
  mutation deleteCFactor($id: ID!) {
    deleteCFactor(id: $id) {
      id
    }
  }
`

const REVERSE_CFACTOR = gql`
  mutation ReverseCFactor($id: ID!) {
    reverseCFactor(id: $id) {
      denom
      denomExp
      denomUnit
      denomComp
      num
      numExp
      numUnit
      numComp
    }
  }
`

export { CREATE_CFACTOR, DELETE_CFACTOR, REVERSE_CFACTOR }

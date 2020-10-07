const { gql, makeExecutableSchema } = require("apollo-server-express");
const CFactor = require("./cfactor").CFactors;

const typeDefs = gql`
  type CFactor {
    id: ID!
    num: String!
    numExp: String
    numUnit: String!
    numComp: String!
    denom: String!
    denomExp: String
    denomUnit: String!
    denomComp: String!
    cfLabel: String!
    cfLibrary: String
  }
  type Query {
    getCFactors: [CFactor]
    getCFactor(id: ID!): CFactor
  }
  type Mutation {
    createCFactor(
      cfLabel: String!
      num: String!
      numExp: String
      numUnit: String!
      numComp: String!
      denom: String!
      denomExp: String
      denomUnit: String!
      denomComp: String!
      cfLibrary: String
    ): CFactor
    reverseCFactor(id: ID!): CFactor
    deleteCFactor(id: ID!): CFactor
  }
`;

const resolvers = {
  Query: {
    getCFactors: (parent, args) => {
      return CFactor.find({});
    },
    getCFactor: (parent, args) => {
      return CFactor.findById((variables = args.id));
    },
  },
  Mutation: {
    createCFactor: (parent, args) => {
      let newCFactor = new CFactor({
        cfLabel: args.cfLabel,
        num: args.num,
        numExp: args.numExp,
        numUnit: args.numUnit,
        numComp: args.numComp,
        denom: args.denom,
        denomExp: args.denomExp,
        denomUnit: args.denomUnit,
        denomComp: args.denomComp,
        cfLabel: args.cfLabel,
        cfLibrary: args.cfLibrary,
      });
      return newCFactor.save();
    },
    reverseCFactor: (parent, args) => {
      //if (!args.id) return;
      return CFactor.findOneAndUpdate(
        {
          _id: args.id,
        },
        {
          $rename: {
            num: "denomTemp",
            numExp: "denomExpTemp",
            numUnit: "denomUnitTemp",
            numComp: "denomCompTemp",
            denom: "num",
            denomExp: "numExp",
            denomUnit: "numUnit",
            denomComp: "numComp",
            denomTemp: "denom",
            denomExpTemp: "denomExp",
            denomUnitTemp: "denomUnit",
            denomCompTemp: "denomComp",
          },
        }
      );
    },
    deleteCFactor: async (parent, args) => {
      return await CFactor.findByIdAndRemove(args.id);
    },
  },
};

module.exports = makeExecutableSchema({
  typeDefs: [typeDefs],
  resolvers: resolvers,
});

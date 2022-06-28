// const { projects, clients } = require("../sampleData");

const RootQuery = require("../query");

const { GraphQLSchema } = require("graphql");

//Mutations
const mutation = require("../mutation");

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});

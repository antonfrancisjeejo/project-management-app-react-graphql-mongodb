const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  },
});

module.exports = ClientType;

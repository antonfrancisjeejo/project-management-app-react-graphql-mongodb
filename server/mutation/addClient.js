const ClientType = require("../schema/client");
const Client = require("../models/Client");
const { GraphQLString, GraphQLNonNull } = require("graphql");

const addClient = {
  type: ClientType,
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    phone: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    const client = new Client({
      name: args.name,
      email: args.email,
      phone: args.phone,
    });
    return client.save();
  },
};

module.exports = addClient;

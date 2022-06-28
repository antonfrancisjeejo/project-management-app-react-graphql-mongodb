const Client = require("../models/Client");
const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");
const ClientType = require("./client");

const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve(parent, args) {
        //parent represents the projects data
        // return clients.find((client) => client.id === parent.clientId);
        return Client.findById(parent.clientId);
      },
    },
  },
});

module.exports = ProjectType;

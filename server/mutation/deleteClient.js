const ClientType = require("../schema/client");
const Client = require("../models/Client");
const { GraphQLNonNull, GraphQLID } = require("graphql");
const Project = require("../models/Project");

const deleteClient = {
  type: ClientType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, args) {
    Project.find({ clientId: args.id }).then((projects) => {
      projects.forEach((project) => {
        project.remove();
      });
    });
    return Client.findByIdAndRemove(args.id);
  },
};

module.exports = deleteClient;

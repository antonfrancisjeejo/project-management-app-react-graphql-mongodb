const Project = require("../models/Project");
const Client = require("../models/Client");
const ProjectType = require("../schema/project");
const ClientType = require("../schema/client");
const { GraphQLObjectType, GraphQLID, GraphQLList } = require("graphql");

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        // return projects;
        return Project.find();
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return projects.find((client) => client.id === args.id);
        return Project.findById(args.id);
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        // return clients;
        return Client.find();
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return clients.find((client) => client.id === args.id);
        return Client.findById(args.id);
      },
    },
  },
});

module.exports = RootQuery;
